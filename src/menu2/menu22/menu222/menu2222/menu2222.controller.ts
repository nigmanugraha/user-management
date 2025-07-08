import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu2222Service } from './menu2222.service';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu2222Polilcy } from './menu2222.policy';

@Controller('menu2222')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu2222Controller {
  constructor(private readonly service: Menu2222Service) {}

  @Get()
  @CheckPolicy(new Menu2222Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu2222Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu2222Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu2222Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
