import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PermissionSeeder } from './permission/permission.seeder';
import { CustomExceptionFilter } from './@shared/custom-error.exception';
import { UserSeeder } from './user/user.seeder';
import { Logger } from '@nestjs/common';
import { RoleSeeder } from './role/role.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new CustomExceptionFilter());

  // Seeding
  // Comment when all seeded
  Logger.log('Start seeding...');
  Logger.log('Seeding permissions...');
  const permissionSeeder = app.get(PermissionSeeder);
  await permissionSeeder.seed();
  Logger.log('Seeding roles...');
  const rolesSeeder = app.get(RoleSeeder);
  await rolesSeeder.seed();
  Logger.log('Seeding users...');
  const userSeeder = app.get(UserSeeder);
  await userSeeder.seed();
  Logger.log('Seeding complete.');
  // Seed end...

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
