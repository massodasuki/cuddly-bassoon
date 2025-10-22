import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermohonanEntity } from './permohonans.entity';

@Injectable()
export class PermohonanService {
  constructor(
    @InjectRepository(PermohonanEntity)
    private permohonansRepository: Repository<PermohonanEntity>,
  ) {}

  findAll(): Promise<PermohonanEntity[]> {
    return this.permohonansRepository.find();
  }

  async findOne(id: string): Promise<PermohonanEntity> {
    const entity = await this.permohonansRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
