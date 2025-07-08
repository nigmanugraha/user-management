import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu31Service } from './menu31.service';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu31Polilcy } from './menu31.policy';

@Controller('menu31')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu31Controller {
  constructor(private readonly service: Menu31Service) {}

  @Get()
  @CheckPolicy(new Menu31Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu31Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu31Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu31Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
