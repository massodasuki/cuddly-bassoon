import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<UserHistorieEntity> {
    return this.userHistoriesRepository.findOneBy({ id });
  }
}
