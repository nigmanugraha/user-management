import { Module } from '@nestjs/common';
import { Menu2221Controller } from './menu2221.controller';
import { Menu2221Service } from './menu2221.service';

@Module({
  controllers: [Menu2221Controller],
  providers: [Menu2221Service],
})
export class Menu2221Module {}
