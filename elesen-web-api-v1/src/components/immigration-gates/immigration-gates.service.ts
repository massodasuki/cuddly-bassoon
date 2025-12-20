import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImmigrationGateEntity } from './immigration-gates.entity';

@Injectable()
export class ImmigrationGateService {
  constructor(
    @InjectRepository(ImmigrationGateEntity)
    private immigrationGatesRepository: Repository<ImmigrationGateEntity>,
  ) {}

  findAll(): Promise<ImmigrationGateEntity[]> {
    return this.immigrationGatesRepository.find();
  }

  async findOne(id: string): Promise<ImmigrationGateEntity> {
    const entity = await this.immigrationGatesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

