import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShellsQuotaEntity } from './shells-quota.entity';

@Injectable()
export class ShellsQuotaEntityervice {
  constructor(
    @InjectRepository(ShellsQuotaEntity)
    private shellsQuotaRepository: Repository<ShellsQuotaEntity>,
  ) {}

  findAll(): Promise<ShellsQuotaEntity[]> {
    return this.shellsQuotaRepository.find();
  }

  findOne(id: string): Promise<ShellsQuotaEntity> {
    return this.shellsQuotaRepository.findOneBy({ id });
  }
}
