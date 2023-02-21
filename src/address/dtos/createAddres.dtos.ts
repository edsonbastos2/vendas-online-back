/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateAddresDto {
  @IsString()
  @IsOptional()
  complemnt: string;

  @IsInt()
  numberAddress: number;

  @IsString()
  cep: string;

  @IsInt()
  cityId: number;
}
