import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kru04ApplicationEntity } from './kru04-applications.entity';

@Injectable()
export class Kru04ApplicationService {
  constructor(
    @InjectRepository(Kru04ApplicationEntity)
    private kru04ApplicationsRepository: Repository<Kru04ApplicationEntity>,
  ) {}

  findAll(): Promise<Kru04ApplicationEntity[]> {
    return this.kru04ApplicationsRepository.find();
  }

  async findOne(id: string): Promise<Kru04ApplicationEntity> {
    const entity = await this.kru04ApplicationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

