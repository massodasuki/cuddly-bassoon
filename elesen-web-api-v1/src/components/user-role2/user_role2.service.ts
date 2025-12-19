import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRole2Entity } from './user_role2.entity';
import { CreateUserRole2Dto } from './dto/create-user_role2.dto';
import { UpdateUserRole2Dto } from './dto/update-user_role2.dto';

@Injectable()
export class UserRole2Service {
  constructor(
    @InjectRepository(UserRole2Entity)
    private userRole2Repository: Repository<UserRole2Entity>,
  ) {}

  findAll(): Promise<UserRole2Entity[]> {
    return this.userRole2Repository.find();
  }

  async findOne(id: string): Promise<UserRole2Entity> {
    const entity = await this.userRole2Repository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`UserRole2Entity with id ${id} not found`);
    }
    return entity;
  }

  async create(createUserRole2Dto: CreateUserRole2Dto): Promise<UserRole2Entity> {
    const entity = this.userRole2Repository.create(createUserRole2Dto);
    return this.userRole2Repository.save(entity);
  }

  async update(id: string, updateUserRole2Dto: UpdateUserRole2Dto): Promise<UserRole2Entity> {
    await this.userRole2Repository.update(id, updateUserRole2Dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRole2Repository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<UserRole2Entity[]> {
    return this.userRole2Repository.find({
      where: { application_id: applicationId }
    });
  }
}