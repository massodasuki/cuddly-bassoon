import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ShellsQuotaHistorieEntity> {
    return this.shellsQuotaHistoriesRepository.findOneBy({ id });
  }
}
