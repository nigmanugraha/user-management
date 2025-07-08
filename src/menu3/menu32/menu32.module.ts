import { Module } from '@nestjs/common';
import { Menu32Controller } from './menu32.controller';
import { Menu32Service } from './menu32.service';

@Module({
  controllers: [Menu32Controller],
  providers: [Menu32Service],
})
export class Menu32Module {}
