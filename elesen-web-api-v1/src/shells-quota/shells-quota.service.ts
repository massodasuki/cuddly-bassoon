import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ShellsQuotaEntity> {
    const entity = await this.shellsQuotaRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ShellsQuotaEntity with id ${id} not found`);
    }
    return entity;
  }
}
