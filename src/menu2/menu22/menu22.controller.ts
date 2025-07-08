import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu22Service } from './menu22.service';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu22Polilcy } from './menu22.policy';

@Controller('menu22')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu22Controller {
  constructor(private readonly service: Menu22Service) {}

  @Get()
  @CheckPolicy(new Menu22Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu22Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu22Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu22Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
