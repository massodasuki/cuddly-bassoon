import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratTemporaryPinEntity } from './darat-temporary-pins.entity';

@Injectable()
export class DaratTemporaryPinService {
  constructor(
    @InjectRepository(DaratTemporaryPinEntity)
    private daratTemporaryPinsRepository: Repository<DaratTemporaryPinEntity>,
  ) {}

  findAll(): Promise<DaratTemporaryPinEntity[]> {
    return this.daratTemporaryPinsRepository.find();
  }

  findOne(id: string): Promise<DaratTemporaryPinEntity> {
    return this.daratTemporaryPinsRepository.findOneBy({ id });
  }
}
