import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PendaftaranPerniagaanEntity } from './pendaftaran-perniagaans.entity';

@Injectable()
export class PendaftaranPerniagaanService {
  constructor(
    @InjectRepository(PendaftaranPerniagaanEntity)
    private pendaftaranPerniagaansRepository: Repository<PendaftaranPerniagaanEntity>,
  ) {}

  findAll(): Promise<PendaftaranPerniagaanEntity[]> {
    return this.pendaftaranPerniagaansRepository.find();
  }

  async findOne(id: string): Promise<PendaftaranPerniagaanEntity> {
    const entity = await this.pendaftaranPerniagaansRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
