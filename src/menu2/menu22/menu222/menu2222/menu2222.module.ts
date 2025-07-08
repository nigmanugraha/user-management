import { Module } from '@nestjs/common';
import { Menu2222Controller } from './menu2222.controller';
import { Menu2222Service } from './menu2222.service';

@Module({
  controllers: [Menu2222Controller],
  providers: [Menu2222Service],
})
export class Menu2222Module {}
