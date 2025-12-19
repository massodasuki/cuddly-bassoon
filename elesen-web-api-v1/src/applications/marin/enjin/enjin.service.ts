import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnjinEntity } from './enjin.entity';

@Injectable()
export class EnjinEntityervice {
  constructor(
    @InjectRepository(EnjinEntity)
    private enjinRepository: Repository<EnjinEntity>,
  ) {}

  findAll(): Promise<EnjinEntity[]> {
    return this.enjinRepository.find();
  }

  async findOne(id: string): Promise<EnjinEntity> {
    const entity = await this.enjinRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
