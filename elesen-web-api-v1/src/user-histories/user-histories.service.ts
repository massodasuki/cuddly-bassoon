import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserHistorieEntity } from './user-histories.entity';

@Injectable()
export class UserHistorieService {
  constructor(
    @InjectRepository(UserHistorieEntity)
    private userHistoriesRepository: Repository<UserHistorieEntity>,
  ) {}

  findAll(): Promise<UserHistorieEntity[]> {
    return this.userHistoriesRepository.find();
  }

  async findOne(id: string): Promise<UserHistorieEntity> {
    const entity = await this.userHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`UserHistorieEntity with id ${id} not found`);
    }
    return entity;
  }
}
