import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Menu2Service } from './menu2.service';
import { CheckPolicy } from 'src/auth/policy/check-policy.decorator';
import { Menu2Polilcy } from './menu2.policy';

@Controller('menu2')
export class Menu2Controller {
  constructor(private readonly service: Menu2Service) {}

  @Get()
  @CheckPolicy(new Menu2Polilcy().Read)
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @CheckPolicy(new Menu2Polilcy().Create)
  create() {
    return this.service.create();
  }

  @Put(':id')
  @CheckPolicy(new Menu2Polilcy().Update)
  update() {
    return this.service.update();
  }

  @Delete(':id')
  @CheckPolicy(new Menu2Polilcy().Delete)
  remove() {
    return this.service.remove();
  }
}
