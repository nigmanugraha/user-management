import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Menu1Module } from './menu1/menu1.module';
import { Menu2Module } from './menu2/menu2.module';
import { Menu3Module } from './menu3/menu3.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    PermissionModule,
    RoleModule,
    UserModule,
    Menu1Module,
    Menu2Module,
    Menu3Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
