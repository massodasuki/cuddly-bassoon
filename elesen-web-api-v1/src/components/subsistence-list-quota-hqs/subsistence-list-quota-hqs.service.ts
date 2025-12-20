import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceListQuotaHqEntity } from './subsistence-list-quota-hqs.entity';

@Injectable()
export class SubsistenceListQuotaHqService {
  constructor(
    @InjectRepository(SubsistenceListQuotaHqEntity)
    private subsistenceListQuotaHqsRepository: Repository<SubsistenceListQuotaHqEntity>,
  ) {}

  findAll(): Promise<SubsistenceListQuotaHqEntity[]> {
    return this.subsistenceListQuotaHqsRepository.find();
  }

  async findOne(id: string): Promise<SubsistenceListQuotaHqEntity> {
    const entity = await this.subsistenceListQuotaHqsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistenceListQuotaHqEntity with id ${id} not found`);
    }
    return entity;
  }
}

