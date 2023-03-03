/* eslint-disable prettier/prettier */
import { AddressEntity } from "../entities/Address.entity";

export class ReturnAddressDto {
  complemnt: string;
  numberAddress: number;
  cep: string;

  constructor(address: AddressEntity) {
    this.complemnt = address.complement
    this.numberAddress = address.numberAddress
    this.cep = address.cep
  }
}
