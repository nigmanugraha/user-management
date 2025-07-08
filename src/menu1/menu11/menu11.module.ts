import { Module } from '@nestjs/common';
import { Menu11Controller } from './menu11.controller';
import { Menu11Service } from './menu11.service';

@Module({
  controllers: [Menu11Controller],
  providers: [Menu11Service],
})
export class Menu11Module {}
