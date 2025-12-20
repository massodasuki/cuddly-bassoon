import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<PendaftaranAntarabangsaEntity> {
    const entity = await this.pendaftaranAntarabangsaRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

