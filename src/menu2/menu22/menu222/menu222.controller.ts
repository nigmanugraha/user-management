import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu222Service } from './menu222.service';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu222Polilcy } from './menu222.policy';

@Controller('menu222')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu222Controller {
  constructor(private readonly service: Menu222Service) {}

  @Get()
  @CheckPolicy(new Menu222Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu222Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu222Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu222Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
