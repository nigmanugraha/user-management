import { Module } from '@nestjs/common';
import { Menu23Controller } from './menu23.controller';
import { Menu23Service } from './menu23.service';

@Module({
  controllers: [Menu23Controller],
  providers: [Menu23Service],
})
export class Menu23Module {}
