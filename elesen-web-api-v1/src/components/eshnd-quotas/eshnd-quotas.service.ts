import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<EshndQuotaEntity> {
    const entity = await this.eshndQuotasRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

