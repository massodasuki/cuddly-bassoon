import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EshndQuotaEntity } from './eshnd-quotas.entity';

@Injectable()
export class EshndQuotaService {
  constructor(
    @InjectRepository(EshndQuotaEntity)
    private eshndQuotasRepository: Repository<EshndQuotaEntity>,
  ) {}

  findAll(): Promise<EshndQuotaEntity[]> {
    return this.eshndQuotasRepository.find();
  }

  findOne(id: string): Promise<EshndQuotaEntity> {
    return this.eshndQuotasRepository.findOneBy({ id });
  }
}
