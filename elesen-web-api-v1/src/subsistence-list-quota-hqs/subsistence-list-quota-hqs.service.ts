import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<SubsistenceListQuotaHqEntity> {
    return this.subsistenceListQuotaHqsRepository.findOneBy({ id });
  }
}
