import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu2221Service } from './menu2221.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu2221Polilcy } from './menu2221.policy';

@Controller('menu2221')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu2221Controller {
  constructor(private readonly service: Menu2221Service) {}

  @Get()
  @CheckPolicy(new Menu2221Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu2221Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu2221Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu2221Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
