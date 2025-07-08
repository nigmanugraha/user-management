import { Controller, Get, UseGuards } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { PermissionPolicy } from './permission.policy';

@Controller('permissions')
@UseGuards(UserGuard, PoliciesGuard)
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  @CheckPolicy(new PermissionPolicy().Read)
  async findAll() {
    return this.permissionService.findAll();
  }
}
