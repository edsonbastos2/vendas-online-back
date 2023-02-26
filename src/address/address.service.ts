import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityService } from 'src/city/city.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateAddresDto } from './dtos/createAddres.dtos';
import { AddressEntity } from './entities/Address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addresRepository: Repository<AddressEntity>,
    private readonly user: UserService,
    private readonly city: CityService,
  ) {}

  async createAddress(
    address: CreateAddresDto,
    userId: number,
  ): Promise<AddressEntity> {
    await this.user.findUserOnly(userId);
    await this.city.findCityId(address.cityId);
    return this.addresRepository.save({
      ...address,
      userId,
    });
  }
}
