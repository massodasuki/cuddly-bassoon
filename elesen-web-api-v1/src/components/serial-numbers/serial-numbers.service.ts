import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SerialNumberEntity } from './serial-numbers.entity';

@Injectable()
export class SerialNumberService {
  constructor(
    @InjectRepository(SerialNumberEntity)
    private serialNumbersRepository: Repository<SerialNumberEntity>,
  ) {}

  findAll(): Promise<SerialNumberEntity[]> {
    return this.serialNumbersRepository.find();
  }

  async findOne(id: string): Promise<SerialNumberEntity> {
    const entity = await this.serialNumbersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SerialNumberEntity with id ${id} not found`);
    }
    return entity;
  }
}
