import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu121Service } from './menu121.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu121Polilcy } from './menu121.policy';

@Controller('menu121')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu121Controller {
  constructor(private readonly service: Menu121Service) {}

  @Get()
  @CheckPolicy(new Menu121Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu121Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu121Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu121Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
