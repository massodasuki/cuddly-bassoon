import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<PermohonanEntity> {
    return this.permohonansRepository.findOneBy({ id });
  }
}
