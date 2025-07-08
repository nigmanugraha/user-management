import { Module } from '@nestjs/common';
import { Menu121Controller } from './menu121.controller';
import { Menu121Service } from './menu121.service';

@Module({
  controllers: [Menu121Controller],
  providers: [Menu121Service],
})
export class Menu121Module {}
