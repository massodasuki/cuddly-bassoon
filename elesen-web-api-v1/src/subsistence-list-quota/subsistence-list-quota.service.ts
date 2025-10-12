import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceListQuotaEntity } from './subsistence-list-quota.entity';

@Injectable()
export class SubsistenceListQuotaEntityervice {
  constructor(
    @InjectRepository(SubsistenceListQuotaEntity)
    private subsistenceListQuotaRepository: Repository<SubsistenceListQuotaEntity>,
  ) {}

  findAll(): Promise<SubsistenceListQuotaEntity[]> {
    return this.subsistenceListQuotaRepository.find();
  }

  findOne(id: string): Promise<SubsistenceListQuotaEntity> {
    return this.subsistenceListQuotaRepository.findOneBy({ id });
  }
}
