import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSeeder } from './user.seeder';

@Module({
  providers: [UserService, UserSeeder],
  controllers: [UserController],
})
export class UserModule {}
