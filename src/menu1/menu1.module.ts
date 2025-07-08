import { Module } from '@nestjs/common';
import { Menu1Controller } from './menu1.controller';
import { Menu1Service } from './menu1.service';
import { Menu11Module } from './menu11/menu11.module';
import { Menu121Module } from './menu12/menu121/menu121.module';
import { Menu13Module } from './menu13/menu13.module';

@Module({
  imports: [Menu11Module, Menu121Module, Menu13Module],
  controllers: [Menu1Controller],
  providers: [Menu1Service],
})
export class Menu1Module {}
