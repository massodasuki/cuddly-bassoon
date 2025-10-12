import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ImmigrationGateEntity> {
    return this.immigrationGatesRepository.findOneBy({ id });
  }
}
