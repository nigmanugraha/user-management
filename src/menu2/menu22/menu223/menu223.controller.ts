import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu223Service } from './menu223.service';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu223Polilcy } from './menu223.policy';

@Controller('menu223')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu223Controller {
  constructor(private readonly service: Menu223Service) {}

  @Get()
  @CheckPolicy(new Menu223Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu223Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu223Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu223Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
