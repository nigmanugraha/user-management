import { Module } from '@nestjs/common';
import { Menu3Controller } from './menu3.controller';
import { Menu3Service } from './menu3.service';
import { Menu31Module } from './menu31/menu31.module';
import { Menu32Module } from './menu32/menu32.module';

@Module({
  imports: [Menu31Module, Menu32Module],
  controllers: [Menu3Controller],
  providers: [Menu3Service],
})
export class Menu3Module {}
