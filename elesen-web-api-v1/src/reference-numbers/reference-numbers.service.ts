import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReferenceNumberEntity } from './reference-numbers.entity';

@Injectable()
export class ReferenceNumberService {
  constructor(
    @InjectRepository(ReferenceNumberEntity)
    private referenceNumbersRepository: Repository<ReferenceNumberEntity>,
  ) {}

  findAll(): Promise<ReferenceNumberEntity[]> {
    return this.referenceNumbersRepository.find();
  }

  async findOne(id: string): Promise<ReferenceNumberEntity> {
    const entity = await this.referenceNumbersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ReferenceNumberEntity with id ${id} not found`);
    }
    return entity;
  }
}
