import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu21Service } from './menu21.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu21Polilcy } from './menu21.policy';

@Controller('menu21')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu21Controller {
  constructor(private readonly service: Menu21Service) {}

  @Get()
  @CheckPolicy(new Menu21Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu21Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu21Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu21Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
