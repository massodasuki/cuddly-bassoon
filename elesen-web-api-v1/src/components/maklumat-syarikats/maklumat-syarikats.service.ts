import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaklumatSyarikatEntity } from './maklumat-syarikats.entity';

@Injectable()
export class MaklumatSyarikatService {
  constructor(
    @InjectRepository(MaklumatSyarikatEntity)
    private maklumatSyarikatsRepository: Repository<MaklumatSyarikatEntity>,
  ) {}

  findAll(): Promise<MaklumatSyarikatEntity[]> {
    return this.maklumatSyarikatsRepository.find();
  }

  async findOne(id: string): Promise<MaklumatSyarikatEntity> {
    const entity = await this.maklumatSyarikatsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

