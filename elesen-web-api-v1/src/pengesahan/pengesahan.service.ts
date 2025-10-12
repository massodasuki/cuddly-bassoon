import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PengesahanEntity } from './pengesahan.entity';

@Injectable()
export class PengesahanEntityervice {
  constructor(
    @InjectRepository(PengesahanEntity)
    private pengesahanRepository: Repository<PengesahanEntity>,
  ) {}

  findAll(): Promise<PengesahanEntity[]> {
    return this.pengesahanRepository.find();
  }

  findOne(id: string): Promise<PengesahanEntity> {
    return this.pengesahanRepository.findOneBy({ id });
  }
}
