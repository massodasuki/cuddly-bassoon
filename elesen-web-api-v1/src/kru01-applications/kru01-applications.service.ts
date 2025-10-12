import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kru01ApplicationEntity } from './kru01-applications.entity';

@Injectable()
export class Kru01ApplicationService {
  constructor(
    @InjectRepository(Kru01ApplicationEntity)
    private kru01ApplicationsRepository: Repository<Kru01ApplicationEntity>,
  ) {}

  findAll(): Promise<Kru01ApplicationEntity[]> {
    return this.kru01ApplicationsRepository.find();
  }

  findOne(id: string): Promise<Kru01ApplicationEntity> {
    return this.kru01ApplicationsRepository.findOneBy({ id });
  }
}
