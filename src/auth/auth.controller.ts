import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly userAuthService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    return await this.userAuthService.register(dto);
  }

  @Post()
  async login(@Body() dto: LoginUserDto) {
    return await this.userAuthService.login(dto);
  }
}
