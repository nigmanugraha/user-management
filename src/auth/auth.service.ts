import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto, RegisterUserDto, UserSchema } from './dto/auth.dto';
import { UnauthorizedError } from 'src/@shared/custom-error.exception';
import * as bcrypt from 'bcrypt';
import { JwtAuthService } from './jwt.service';
import { User } from '@prisma/client';
import { GetDataResponse } from 'src/@shared/response-provider';
import { hashPassword } from 'src/@shared/helper';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtAuthService: JwtAuthService,
  ) {}

  async register(dto: RegisterUserDto) {
    try {
      const paswordHash = hashPassword(dto.password);
      const userToCreate = await this.prisma.user.create({
        data: {
          name: dto.name,
          username: dto.username,
          email: dto.email,
          password: paswordHash,
          roles: dto.roles
            ? {
                connect: dto.roles.map((id) => ({ id })),
              }
            : undefined,
        },
        omit: {
          password: true,
        },
      });

      return new GetDataResponse(userToCreate);
    } catch (error) {
      throw error;
    }
  }

  async login(dto: LoginUserDto) {
    try {
      const user: UserSchema | null = await this.prisma.user.findUnique({
        where: {
          username: dto.username,
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
        throw new UnauthorizedError();
      }

      const isPasswordValid = await bcrypt.compare(dto.password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedError();
      }

      if (!dto.role) {
        // if dto.role not exist
        // return list user's role before generate token
        return new GetDataResponse(
          user.roles?.map((role) => ({ id: role.id, name: role.name })),
        );
      }

      if (!user.roles?.find((role) => role.id === dto.role)) {
        throw new UnauthorizedError();
      }

      const userForJwt = this.mapForJwt(user, dto.role);
      const accessToken = await this.jwtAuthService.generateJwtToken(
        userForJwt,
        '7d',
      );
      const refreshToken = await this.jwtAuthService.generateJwtRefreshToken(
        userForJwt,
        '7d',
      );
      const response = {
        user: this.mapForReturn(user, dto.role),
        accessToken,
        refreshToken,
        typeToken: 'Bearer',
      };
      return new GetDataResponse(response);
    } catch (error) {
      throw error;
    }
  }

  // return all permission
  private mapForReturn(user: UserSchema, roleId: number) {
    const role = user.roles?.find((role) => role.id === roleId);
    return {
      id: user.id,
      email: user.email,
      username: user.username,
      role,
    };
  }

  // return without permission
  private mapForJwt(user: UserSchema, roleId: number) {
    const role = user.roles?.find((role) => role.id === roleId);
    return {
      id: user.id,
      email: user.email,
      username: user.username,
      role: {
        id: role?.id,
        name: role?.name,
      },
    };
  }
}
