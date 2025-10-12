import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MuatanEntity } from './muatan.entity';

@Injectable()
export class MuatanEntityervice {
  constructor(
    @InjectRepository(MuatanEntity)
    private muatanRepository: Repository<MuatanEntity>,
  ) {}

  findAll(): Promise<MuatanEntity[]> {
    return this.muatanRepository.find();
  }

  findOne(id: string): Promise<MuatanEntity> {
    return this.muatanRepository.findOneBy({ id });
  }
}
