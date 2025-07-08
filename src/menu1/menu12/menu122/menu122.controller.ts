import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu122Service } from './menu122.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu122Polilcy } from './menu122.policy';

@Controller('menu122')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu122Controller {
  constructor(private readonly service: Menu122Service) {}

  @Get()
  @CheckPolicy(new Menu122Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu122Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu122Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu122Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
