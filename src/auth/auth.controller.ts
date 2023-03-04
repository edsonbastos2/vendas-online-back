import { Controller } from '@nestjs/common';
import { Body, Post, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ReturnUSerDto } from 'src/user/dtos/returnUser.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async login(@Body() login: LoginDto): Promise<ReturnUSerDto> {
    return new ReturnUSerDto(await this.authService.login(login));
  }
}
