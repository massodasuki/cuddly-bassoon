import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<PendaftaranPerniagaanEntity> {
    return this.pendaftaranPerniagaansRepository.findOneBy({ id });
  }
}
