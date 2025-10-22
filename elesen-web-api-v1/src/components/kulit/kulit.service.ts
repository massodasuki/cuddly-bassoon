import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KulitEntity } from './kulit.entity';

@Injectable()
export class KulitEntityervice {
  constructor(
    @InjectRepository(KulitEntity)
    private kulitRepository: Repository<KulitEntity>,
  ) {}

  findAll(): Promise<KulitEntity[]> {
    return this.kulitRepository.find();
  }

  async findOne(id: string): Promise<KulitEntity> {
    const entity = await this.kulitRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
