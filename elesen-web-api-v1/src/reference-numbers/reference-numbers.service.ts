import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ReferenceNumberEntity> {
    return this.referenceNumbersRepository.findOneBy({ id });
  }
}
