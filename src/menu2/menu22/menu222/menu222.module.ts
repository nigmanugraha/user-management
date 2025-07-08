import { Module } from '@nestjs/common';
import { Menu222Controller } from './menu222.controller';
import { Menu222Service } from './menu222.service';
import { Menu2221Module } from './menu2221/menu2221.module';
import { Menu2222Module } from './menu2222/menu2222.module';

@Module({
  imports: [Menu2221Module, Menu2222Module],
  controllers: [Menu222Controller],
  providers: [Menu222Service],
})
export class Menu222Module {}
