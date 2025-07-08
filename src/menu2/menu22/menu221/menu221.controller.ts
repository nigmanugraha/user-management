import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu221Service } from './menu221.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu221Polilcy } from './menu221.policy';

@Controller('menu221')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu221Controller {
  constructor(private readonly service: Menu221Service) {}

  @Get()
  @CheckPolicy(new Menu221Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu221Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu221Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu221Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
