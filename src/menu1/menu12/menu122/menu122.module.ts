import { Module } from '@nestjs/common';
import { Menu122Controller } from './menu122.controller';
import { Menu122Service } from './menu122.service';

@Module({
  controllers: [Menu122Controller],
  providers: [Menu122Service],
})
export class Menu122Module {}
