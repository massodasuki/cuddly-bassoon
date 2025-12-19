import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModule3Entity } from './user-module3.entity';
import { CreateUserModule3Dto } from './dto/create-user-module3.dto';
import { UpdateUserModule3Dto } from './dto/update-user-module3.dto';

@Injectable()
export class UserModule3Service {
  constructor(
    @InjectRepository(UserModule3Entity)
    private userModule3Repository: Repository<UserModule3Entity>,
  ) {}

  findAll(): Promise<UserModule3Entity[]> {
    return this.userModule3Repository.find();
  }

  async findOne(id: string): Promise<UserModule3Entity> {
    const entity = await this.userModule3Repository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`UserModule3Entity with id ${id} not found`);
    }
    return entity;
  }

  async create(createUserModule3Dto: CreateUserModule3Dto): Promise<UserModule3Entity> {
    const entity = this.userModule3Repository.create(createUserModule3Dto);
    return this.userModule3Repository.save(entity);
  }

  async update(id: string, updateUserModule3Dto: UpdateUserModule3Dto): Promise<UserModule3Entity> {
    await this.userModule3Repository.update(id, updateUserModule3Dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userModule3Repository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<UserModule3Entity[]> {
    return this.userModule3Repository.find({
      where: { application_id: applicationId }
    });
  }
}