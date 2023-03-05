import { AddressService } from './address.service';
import { Body, Controller, Post, Param } from '@nestjs/common';
import { CreateAddresDto } from './dtos/createAddres.dtos';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AddressEntity } from './entities/Address.entity';
import { UserType } from 'src/user/enum/user-type.enum';
import { Roles } from 'src/descorators/roles.decorator';

@Roles(UserType.User)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/:userId')
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddress: CreateAddresDto,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddress, userId);
  }
}
