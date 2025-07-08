import { Module } from '@nestjs/common';
import { Menu13Controller } from './menu13.controller';
import { Menu13Service } from './menu13.service';
import { Menu131Module } from './menu131/menu131.module';

@Module({
  imports: [Menu131Module],
  controllers: [Menu13Controller],
  providers: [Menu13Service],
})
export class Menu13Module {}
