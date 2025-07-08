import { Module } from '@nestjs/common';
import { Menu2Controller } from './menu2.controller';
import { Menu2Service } from './menu2.service';

@Module({
  controllers: [Menu2Controller],
  providers: [Menu2Service],
})
export class Menu2Module {}
