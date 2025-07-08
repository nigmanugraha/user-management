import { Injectable } from '@nestjs/common';
import { permission } from 'process';
import { hashPassword } from 'src/@shared/helper';
import { PresetPermission } from 'src/permission/permission.preset';
import { SubjectsEnum } from 'src/permission/subject.enum';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserSeeder {
  constructor(private prisma: PrismaService) {}

  async seed() {
    // seed role

    const roleManager = await this.prisma.role.upsert({
      where: {
        name: 'Role Manager',
      },
      update: {},
      create: {
        name: 'Role Manager',
        permissions: {
          connect: [
            // generate permission for role
            ...PresetPermission.create
              .can('crud', SubjectsEnum.ROLE)
              .map(this.mapPermission),
            // generate permission for permission
            ...PresetPermission.create
              .can('r', SubjectsEnum.PERMISSION)
              .map(this.mapPermission),
          ],
        },
      },
    });

    const superadmin = await this.prisma.role.upsert({
      where: {
        name: 'Superadmin',
      },
      update: {},
      create: {
        name: 'Superadmin',
        permissions: {
          connect: PresetPermission.create
            .can('m', SubjectsEnum.ALL)
            .map(this.mapPermission),
        },
      },
    });

    const passwordHash = hashPassword('Rahasia123');

    // seed rolemanager
    await this.prisma.user.upsert({
      where: {
        username: 'nigmanugraha',
      },
      update: {},
      create: {
        name: 'Nigmanugraha',
        username: 'nigmanugraha',
        email: 'nigmanugraha@super.com',
        password: passwordHash,
        roles: {
          connect: [{ id: roleManager.id }, { id: superadmin.id }],
        },
      },
    });

    // seed superadmin
    await this.prisma.user.upsert({
      where: {
        username: 'superadmin',
      },
      update: {},
      create: {
        name: 'Superadmin',
        username: 'superadmin',
        email: 'superadmin@super.com',
        password: passwordHash,
        roles: {
          connect: [{ id: superadmin.id }],
        },
      },
    });
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
