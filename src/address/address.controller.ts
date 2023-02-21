import { AddressService } from './address.service';
import { Body, Controller, Post, Param } from '@nestjs/common';
import { CreateAddresDto } from './dtos/createAddres.dtos';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AddressEntity } from './entities/Address.entity';

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
