import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PematuhanEntity } from './pematuhan.entity';

@Injectable()
export class PematuhanEntityervice {
  constructor(
    @InjectRepository(PematuhanEntity)
    private pematuhanRepository: Repository<PematuhanEntity>,
  ) {}

  findAll(): Promise<PematuhanEntity[]> {
    return this.pematuhanRepository.find();
  }

  async findOne(id: string): Promise<PematuhanEntity> {
    const entity = await this.pematuhanRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

