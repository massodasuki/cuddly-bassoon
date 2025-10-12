import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserEntityDto } from './dto/create-user.dto';
import { UpdateUserEntityDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new Error('UserEntity not found');
    }
    return user;
  }

  async create(createUserEntityDto: CreateUserEntityDto): Promise<UserEntity> {
    const user = this.usersRepository.create(createUserEntityDto);
    return this.usersRepository.save(user);
  }

  async update(id: string, updateUserEntityDto: UpdateUserEntityDto): Promise<UserEntity> {
    await this.usersRepository.update(id, updateUserEntityDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}