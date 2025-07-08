import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu12Service } from './menu12.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu12Polilcy } from './menu12.policy';

@Controller('menu12')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu12Controller {
  constructor(private readonly service: Menu12Service) {}

  @Get()
  @CheckPolicy(new Menu12Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu12Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu12Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu12Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
