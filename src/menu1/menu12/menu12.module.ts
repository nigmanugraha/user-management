import { Module } from '@nestjs/common';
import { Menu12Controller } from './menu12.controller';
import { Menu12Service } from './menu12.service';
import { Menu121Module } from './menu121/menu121.module';
import { Menu122Module } from './menu122/menu122.module';

@Module({
  imports: [Menu121Module, Menu122Module],
  controllers: [Menu12Controller],
  providers: [Menu12Service],
})
export class Menu12Module {}
