import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<MuatanEntity> {
    const entity = await this.muatanRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

