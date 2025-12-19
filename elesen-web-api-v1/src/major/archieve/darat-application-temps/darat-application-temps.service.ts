import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratApplicationTempEntity } from './darat-application-temps.entity';

@Injectable()
export class DaratApplicationTempService {
  constructor(
    @InjectRepository(DaratApplicationTempEntity)
    private daratApplicationTempsRepository: Repository<DaratApplicationTempEntity>,
  ) {}

  findAll(): Promise<DaratApplicationTempEntity[]> {
    return this.daratApplicationTempsRepository.find();
  }

  async findOne(id: string): Promise<DaratApplicationTempEntity> {
    const daratApplicationTemp = await this.daratApplicationTempsRepository.findOneBy({ id });
    if (!daratApplicationTemp) {
      throw new NotFoundException();
    }
    return daratApplicationTemp;
  }
}
