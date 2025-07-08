import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { hashPassword } from 'src/@shared/helper';
import { CustomResponse, GetDataResponse } from 'src/@shared/response-provider';
import { NotFoundError } from 'src/@shared/custom-error.exception';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<CustomResponse<any>> {
    try {
      const users = await this.prisma.user.findMany({
        omit: {
          password: true,
        },
        include: {
          roles: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
      return new GetDataResponse(users);
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<CustomResponse<any>> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
        omit: {
          password: true,
        },
        include: {
          roles: {
            select: {
              id: true,
              name: true,
              permissions: {
                select: {
                  action: true,
                  subject: true,
                  conditions: true,
                },
              },
            },
          },
        },
      });
      if (!user) {
        throw new NotFoundError('User not found');
      }
      return new GetDataResponse(user);
    } catch (error) {
      throw error;
    }
  }
}
