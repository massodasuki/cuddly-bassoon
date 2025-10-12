import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<MaklumatSyarikatEntity> {
    return this.maklumatSyarikatsRepository.findOneBy({ id });
  }
}
