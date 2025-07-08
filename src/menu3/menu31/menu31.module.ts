import { Module } from '@nestjs/common';
import { Menu31Controller } from './menu31.controller';
import { Menu31Service } from './menu31.service';

@Module({
  controllers: [Menu31Controller],
  providers: [Menu31Service],
})
export class Menu31Module {}
