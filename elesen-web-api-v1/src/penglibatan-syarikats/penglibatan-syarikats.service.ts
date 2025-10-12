import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PenglibatanSyarikatEntity } from './penglibatan-syarikats.entity';

@Injectable()
export class PenglibatanSyarikatService {
  constructor(
    @InjectRepository(PenglibatanSyarikatEntity)
    private penglibatanSyarikatsRepository: Repository<PenglibatanSyarikatEntity>,
  ) {}

  findAll(): Promise<PenglibatanSyarikatEntity[]> {
    return this.penglibatanSyarikatsRepository.find();
  }

  findOne(id: string): Promise<PenglibatanSyarikatEntity> {
    return this.penglibatanSyarikatsRepository.findOneBy({ id });
  }
}
