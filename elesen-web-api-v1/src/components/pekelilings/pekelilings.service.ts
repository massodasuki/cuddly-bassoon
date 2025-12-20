import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PekelilingEntity } from './pekelilings.entity';

@Injectable()
export class PekelilingService {
  constructor(
    @InjectRepository(PekelilingEntity)
    private pekelilingsRepository: Repository<PekelilingEntity>,
  ) {}

  findAll(): Promise<PekelilingEntity[]> {
    return this.pekelilingsRepository.find();
  }

  async findOne(id: string): Promise<PekelilingEntity> {
    const entity = await this.pekelilingsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

