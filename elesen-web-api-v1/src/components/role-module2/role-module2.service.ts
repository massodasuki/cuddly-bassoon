import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleModule2Entity } from './role-module2.entity';
import { CreateRoleModule2Dto } from './dto/create-role-module2.dto';
import { UpdateRoleModule2Dto } from './dto/update-role-module2.dto';

@Injectable()
export class RoleModule2Service {
  constructor(
    @InjectRepository(RoleModule2Entity)
    private roleModule2Repository: Repository<RoleModule2Entity>,
  ) {}

  findAll(): Promise<RoleModule2Entity[]> {
    return this.roleModule2Repository.find();
  }

  async findOne(id: string): Promise<RoleModule2Entity> {
    const entity = await this.roleModule2Repository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`RoleModule2Entity with id ${id} not found`);
    }
    return entity;
  }

  async create(createRoleModule2Dto: CreateRoleModule2Dto): Promise<RoleModule2Entity> {
    const entity = this.roleModule2Repository.create(createRoleModule2Dto);
    return this.roleModule2Repository.save(entity);
  }

  async update(id: string, updateRoleModule2Dto: UpdateRoleModule2Dto): Promise<RoleModule2Entity> {
    await this.roleModule2Repository.update(id, updateRoleModule2Dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.roleModule2Repository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<RoleModule2Entity[]> {
    return this.roleModule2Repository.find({
      where: { application_id: applicationId }
    });
  }
}