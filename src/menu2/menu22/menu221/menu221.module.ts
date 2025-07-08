import { Module } from '@nestjs/common';
import { Menu221Controller } from './menu221.controller';
import { Menu221Service } from './menu221.service';

@Module({
  controllers: [Menu221Controller],
  providers: [Menu221Service],
})
export class Menu221Module {}
