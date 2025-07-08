import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { UserService } from './user.service';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { UserPolicy } from './user.policy';

@Controller('users')
@UseGuards(UserGuard, PoliciesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @CheckPolicy(new UserPolicy().Read)
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @CheckPolicy(new UserPolicy().Read)
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }
}
