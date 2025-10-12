import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PendaftaranAntarabangsaEntity } from './pendaftaran-antarabangsa.entity';

@Injectable()
export class PendaftaranAntarabangsaEntityervice {
  constructor(
    @InjectRepository(PendaftaranAntarabangsaEntity)
    private pendaftaranAntarabangsaRepository: Repository<PendaftaranAntarabangsaEntity>,
  ) {}

  findAll(): Promise<PendaftaranAntarabangsaEntity[]> {
    return this.pendaftaranAntarabangsaRepository.find();
  }

  findOne(id: string): Promise<PendaftaranAntarabangsaEntity> {
    return this.pendaftaranAntarabangsaRepository.findOneBy({ id });
  }
}
