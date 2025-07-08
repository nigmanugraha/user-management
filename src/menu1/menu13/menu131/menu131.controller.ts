import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu131Service } from './menu131.service';
import { UserGuard } from 'src/auth/guard/user.guard';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu131Polilcy } from './menu131.policy';

@Controller('menu131')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu131Controller {
  constructor(private readonly service: Menu131Service) {}

  @Get()
  @CheckPolicy(new Menu131Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu131Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu131Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu131Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
