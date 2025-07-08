import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu23Service } from './menu23.service';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu23Polilcy } from './menu23.policy';

@Controller('menu23')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu23Controller {
  constructor(private readonly service: Menu23Service) {}

  @Get()
  @CheckPolicy(new Menu23Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu23Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu23Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu23Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
