import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/User.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passworHash = await hash(user.password, saltOrRounds);

    return await this.userRepository.save({
      ...user,
      typeUser: 1,
      password: passworHash,
    });
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async getUserByIdSingRelations(userId: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['addresses'],
    });
  }

  async findUserOnly(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException(`userId: ${userId} não encontrado`);
    }

    return user;
  }
}
