import { Module } from '@nestjs/common';
import { Menu223Controller } from './menu223.controller';
import { Menu223Service } from './menu223.service';

@Module({
  controllers: [Menu223Controller],
  providers: [Menu223Service],
})
export class Menu223Module {}
