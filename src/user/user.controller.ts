import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateUserDto } from './dtos/createUser.dto';
import { ReturnUSerDto } from './dtos/returnUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUser(): Promise<ReturnUSerDto[]> {
    return (await this.userService.getUsers()).map(
      (userEntity) => new ReturnUSerDto(userEntity),
    );
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }
}
