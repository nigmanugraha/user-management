import { Injectable } from '@nestjs/common';
import { Permission } from '@prisma/client';
import { CustomResponse, GetDataResponse } from 'src/@shared/response-provider';
import { PrismaService } from 'src/prisma/prisma.service';
import { PermissionDto } from './dto/permission.dto';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<CustomResponse<PermissionDto[]>> {
    try {
      const permissions = await this.prisma.permission.findMany({
        select: {
          id: true,
          action: true,
          subject: true,
          conditions: true,
        },
      });

      return new GetDataResponse(permissions.map(this.mapToDto));
    } catch (error) {
      throw error;
    }
  }

  private mapToDto(data: Permission): PermissionDto {
    return {
      id: data.id,
      action: data.action,
      subject: data.subject,
      conditions: data.conditions,
    };
  }
}
