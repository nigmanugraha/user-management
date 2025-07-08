import { Injectable } from '@nestjs/common';
import { PERMISSIONS } from './permission.constant';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionSeeder {
  constructor(private prisma: PrismaService) {}

  async seed() {
    for (const p of PERMISSIONS) {
      await this.prisma.permission.upsert({
        where: {
          action_subject: {
            action: p.action,
            subject: p.subject,
          },
        },
        update: {},
        create: {
          action: p.action,
          subject: p.subject,
        },
      });
    }
  }
}
