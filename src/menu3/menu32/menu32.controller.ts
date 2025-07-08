import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu32Service } from './menu32.service';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu32Polilcy } from './menu32.policy';

@Controller('menu32')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu32Controller {
  constructor(private readonly service: Menu32Service) {}

  @Get()
  @CheckPolicy(new Menu32Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu32Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu32Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu32Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
