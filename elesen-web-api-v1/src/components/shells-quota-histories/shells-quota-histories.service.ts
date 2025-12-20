import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShellsQuotaHistorieEntity } from './shells-quota-histories.entity';

@Injectable()
export class ShellsQuotaHistorieService {
  constructor(
    @InjectRepository(ShellsQuotaHistorieEntity)
    private shellsQuotaHistoriesRepository: Repository<ShellsQuotaHistorieEntity>,
  ) {}

  findAll(): Promise<ShellsQuotaHistorieEntity[]> {
    return this.shellsQuotaHistoriesRepository.find();
  }

  async findOne(id: string): Promise<ShellsQuotaHistorieEntity> {
    const entity = await this.shellsQuotaHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ShellsQuotaHistorieEntity with id ${id} not found`);
    }
    return entity;
  }
}

