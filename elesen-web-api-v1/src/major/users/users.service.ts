import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { UserEntity } from './users.entity';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async create(createUsersDto: CreateUsersDto): Promise<UserEntity> {
    const user = this.usersRepository.create(createUsersDto);
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find({
      where: { deleted_at: IsNull() },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: string): Promise<UserEntity | null> {
    return this.usersRepository.findOne({
      where: { id, deleted_at: IsNull() },
    });
  }

  async update(id: string, updateUsersDto: UpdateUsersDto): Promise<UserEntity | null> {
    await this.usersRepository.update(id, updateUsersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.update(id, {
      deleted_at: new Date(),
    });
  }
}