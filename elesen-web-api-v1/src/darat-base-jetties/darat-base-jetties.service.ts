import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratBaseJettieEntity } from './darat-base-jetties.entity';

@Injectable()
export class DaratBaseJettieService {
  constructor(
    @InjectRepository(DaratBaseJettieEntity)
    private daratBaseJettiesRepository: Repository<DaratBaseJettieEntity>,
  ) {}

  findAll(): Promise<DaratBaseJettieEntity[]> {
    return this.daratBaseJettiesRepository.find();
  }

  findOne(id: string): Promise<DaratBaseJettieEntity> {
    return this.daratBaseJettiesRepository.findOneBy({ id });
  }
}
