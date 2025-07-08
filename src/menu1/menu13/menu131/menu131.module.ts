import { Module } from '@nestjs/common';
import { Menu131Controller } from './menu131.controller';
import { Menu131Service } from './menu131.service';

@Module({
  controllers: [Menu131Controller],
  providers: [Menu131Service],
})
export class Menu131Module {}
