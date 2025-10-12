import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SsdEntity } from './ssds.entity';

@Injectable()
export class SsdService {
  constructor(
    @InjectRepository(SsdEntity)
    private ssdsRepository: Repository<SsdEntity>,
  ) {}

  findAll(): Promise<SsdEntity[]> {
    return this.ssdsRepository.find();
  }

  findOne(id: string): Promise<SsdEntity> {
    return this.ssdsRepository.findOneBy({ id });
  }
}
