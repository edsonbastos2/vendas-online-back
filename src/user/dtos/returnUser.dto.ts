/* eslint-disable prettier/prettier */
import { ReturnAddressDto } from 'src/address/dtos/returnAddress.dto';
import { UserEntity } from '../entities/User.entity';

export class ReturnUSerDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: ReturnAddressDto[]

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
    this.address = userEntity.addresses ? userEntity.addresses.map((address) => new ReturnAddressDto(address)) : undefined
  }
}
