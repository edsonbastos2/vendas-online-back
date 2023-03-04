/* eslint-disable prettier/prettier */
import { UserEntity } from 'src/user/entities/User.entity';

export class LoginPayloadDto {
  id: number;
  typeUser: number;

  constructor(user: UserEntity) {
    this.id = user.id
    this.typeUser = user.typeUser
  }
}
