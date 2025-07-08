import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Permission, Role, User } from '@prisma/client';
import { RoleDto } from './dto/response-role.dto';
import {
  CreateDataResponse,
  CustomResponse,
  DeleteDataResponse,
  GetDataResponse,
  UpdateDataResponse,
} from 'src/@shared/response-provider';
import { RoleSchema } from './dto/role.dto';
import { NotFoundError } from 'src/@shared/custom-error.exception';
import { handlePrismaNotFound } from 'src/@shared/helper';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRoleDto) {
    try {
      const roles = await this.prisma.role.create({
        data: {
          name: dto.name,
          permissions: dto.permissionIds
            ? {
                connect: dto.permissionIds.map((id) => ({ id })),
              }
            : undefined,
        },
        include: {
          permissions: {
            select: {
              subject: true,
              action: true,
              conditions: true,
            },
          },
        },
      });
      return new CreateDataResponse(this.mapToDto(roles));
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const roles: RoleSchema[] = await this.prisma.role.findMany({
        where: {
          deleted_at: null,
        },
        include: {
          permissions: {
            select: {
              subject: true,
              action: true,
              conditions: true,
            },
          },
          users: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
      return new GetDataResponse(roles.map(this.mapToDto));
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<CustomResponse<RoleDto>> {
    try {
      const role: RoleSchema | null = await this.prisma.role.findUnique({
        where: { id, deleted_at: null },
        include: {
          permissions: {
            select: {
              subject: true,
              action: true,
              conditions: true,
            },
          },
          users: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      if (!role) throw new NotFoundError('Role not found');

      return new GetDataResponse(this.mapToDto(role));
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, dto: UpdateRoleDto) {
    try {
      const roleToUpdate: RoleSchema = await this.prisma.role.delete({
        where: { id },
        include: {
          permissions: {
            select: {
              subject: true,
              action: true,
              conditions: true,
            },
          },
        },
      });

      return new UpdateDataResponse(this.mapToDto(roleToUpdate));
    } catch (error) {
      handlePrismaNotFound('Role', error);
    }
  }

  async remove(id: number) {
    try {
      const roleToDelete = await this.prisma.role.update({
        where: { id },
        data: {
          deleted_at: new Date(),
        },
        include: {
          permissions: {
            select: {
              subject: true,
              action: true,
              conditions: true,
            },
          },
        },
      });
      return new DeleteDataResponse(this.mapToDto(roleToDelete));
    } catch (error) {
      handlePrismaNotFound('Role', error);
    }
  }

  private mapToDto(data: RoleSchema): RoleDto {
    return {
      id: data.id,
      name: data.name,
      permissions:
        data.permissions?.map((permission) => ({
          subject: permission.subject,
          action: permission.action,
          conditions: permission.conditions,
        })) || [],
      users:
        data.users?.map((user) => ({ id: user.id, name: user.name })) || [],
      created_at: data.created_at.toISOString(),
      updated_at: data.updated_at?.toISOString(),
    };
  }
}
