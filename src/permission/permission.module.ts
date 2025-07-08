import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionSeeder } from './permission.seeder';
import { PermissionController } from './permission.controller';

@Module({
  providers: [PermissionService, PermissionSeeder],
  controllers: [PermissionController],
})
export class PermissionModule {}
