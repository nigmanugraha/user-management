import { Module } from '@nestjs/common';
import { Menu21Controller } from './menu21.controller';
import { Menu21Service } from './menu21.service';

@Module({
  controllers: [Menu21Controller],
  providers: [Menu21Service],
})
export class Menu21Module {}
