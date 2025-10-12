import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SubsistenceListQuotaEntity> {
    const entity = await this.subsistenceListQuotaRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistenceListQuota with id ${id} not found`);
    }
    return entity;
  }
}
