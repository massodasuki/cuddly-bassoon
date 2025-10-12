import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<SerialNumberEntity> {
    return this.serialNumbersRepository.findOneBy({ id });
  }
}
