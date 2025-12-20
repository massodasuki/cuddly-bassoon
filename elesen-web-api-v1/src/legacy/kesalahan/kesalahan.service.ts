import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KesalahanEntity } from './kesalahan.entity';

@Injectable()
export class KesalahanEntityervice {
  constructor(
    @InjectRepository(KesalahanEntity)
    private kesalahanRepository: Repository<KesalahanEntity>,
  ) {}

  findAll(): Promise<KesalahanEntity[]> {
    return this.kesalahanRepository.find();
  }

  async findOne(id: string): Promise<KesalahanEntity> {
    const entity = await this.kesalahanRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

