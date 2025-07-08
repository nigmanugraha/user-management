import { Module } from '@nestjs/common';
import { PermissionSeeder } from '../permission/permission.seeder';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleSeeder } from './role.seeder';

@Module({
  providers: [RoleService, RoleSeeder],
  controllers: [RoleController],
})
export class RoleModule {}
