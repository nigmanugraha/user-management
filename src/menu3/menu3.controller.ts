import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Menu3Service } from './menu3.service';
import { PoliciesGuard } from 'src/auth/guard/policy.guard';
import { UserGuard } from 'src/auth/guard/user.guard';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu3Polilcy } from './menu3.policy';

@Controller('menu3')
@UseGuards(UserGuard, PoliciesGuard)
export class Menu3Controller {
  constructor(private readonly service: Menu3Service) {}

  @Get()
  @CheckPolicy(new Menu3Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu3Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu3Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu3Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
