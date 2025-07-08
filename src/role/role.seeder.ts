import { Injectable } from '@nestjs/common';
import { permission } from 'process';
import { hashPassword } from 'src/@shared/helper';
import { PresetPermission } from 'src/permission/permission.preset';
import { SubjectsEnum } from 'src/permission/subject.enum';
import { PrismaService } from 'src/prisma/prisma.service';
import { ROLES } from './role.constant';

@Injectable()
export class RoleSeeder {
  constructor(private prisma: PrismaService) {}

  async seed() {
    // seed role
    for (const r of ROLES) {
      await this.prisma.role.upsert({
        where: {
          name: r.name,
        },
        update: {},
        create: {
          name: r.name,
          permissions: {
            connect: r.permissions.map(this.mapPermission),
          },
        },
      });
    }
  }

  private mapPermission(permission: { action: string; subject: string }) {
    return {
      action_subject: {
        action: permission.action,
        subject: permission.subject,
      },
    };
  }
}
