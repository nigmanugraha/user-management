import { Module } from '@nestjs/common';
import { Menu22Controller } from './menu22.controller';
import { Menu22Service } from './menu22.service';
import { Menu221Module } from './menu221/menu221.module';
import { Menu222Module } from './menu222/menu222.module';
import { Menu223Module } from './menu223/menu223.module';

@Module({
  imports: [Menu221Module, Menu222Module, Menu223Module],
  controllers: [Menu22Controller],
  providers: [Menu22Service],
})
export class Menu22Module {}
