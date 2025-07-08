import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu13Service } from './menu13.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu13Polilcy } from './menu13.policy';

@Controller('menu13')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu13Controller {
  constructor(private readonly service: Menu13Service) {}

  @Get()
  @CheckPolicy(new Menu13Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu13Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu13Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu13Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
