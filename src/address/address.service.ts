import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddresDto } from './dtos/createAddres.dtos';
import { AddressEntity } from './entities/Address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addresRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(
    address: CreateAddresDto,
    userId: number,
  ): Promise<AddressEntity> {
    return this.addresRepository.save({
      ...address,
      userId,
    });
  }
}
