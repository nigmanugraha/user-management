import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu11Service } from './menu11.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu11Polilcy } from './menu11.policy';

@Controller('menu11')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu11Controller {
  constructor(private readonly service: Menu11Service) {}

  @Get()
  @CheckPolicy(new Menu11Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu11Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu11Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu11Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
