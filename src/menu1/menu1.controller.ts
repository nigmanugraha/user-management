import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu1Service } from './menu1.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu1Polilcy } from './menu1.policy';

@Controller('menu1')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu1Controller {
  constructor(private readonly service: Menu1Service) {}

  @Get()
  @CheckPolicy(new Menu1Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu1Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu1Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu1Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
