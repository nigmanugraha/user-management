import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleService } from './role.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { RolePolicy } from './role.policy';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';

@Controller('roles')
@UseGuards(UserGuard, PoliciesGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @CheckPolicy(new RolePolicy().Create)
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.create(dto);
  }

  @Get()
  @CheckPolicy(new RolePolicy().Read)
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  @CheckPolicy(new RolePolicy().Read)
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Put(':id')
  @CheckPolicy(new RolePolicy().Update)
  update(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    return this.roleService.update(+id, dto);
  }

  @Delete(':id')
  @CheckPolicy(new RolePolicy().Delete)
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
