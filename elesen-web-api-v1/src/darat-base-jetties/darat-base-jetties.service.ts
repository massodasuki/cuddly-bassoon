import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<DaratBaseJettieEntity> {
    const daratBaseJettie = await this.daratBaseJettiesRepository.findOneBy({ id });
    if (!daratBaseJettie) {
      throw new NotFoundException();
    }
    return daratBaseJettie;
  }
}
