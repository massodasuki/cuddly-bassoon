import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PemilikanEntity } from './pemilikan.entity';

@Injectable()
export class PemilikanEntityervice {
  constructor(
    @InjectRepository(PemilikanEntity)
    private pemilikanRepository: Repository<PemilikanEntity>,
  ) {}

  findAll(): Promise<PemilikanEntity[]> {
    return this.pemilikanRepository.find();
  }

  findOne(id: string): Promise<PemilikanEntity> {
    return this.pemilikanRepository.findOneBy({ id });
  }
}
