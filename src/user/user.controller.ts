import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param, UsePipes } from '@nestjs/common/decorators';
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

  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUSerDto> {
    return new ReturnUSerDto(
      await this.userService.getUserByIdSingRelations(userId),
    );
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }
}
