import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JettieEntity } from './jetties.entity';

@Injectable()
export class JettieService {
  constructor(
    @InjectRepository(JettieEntity)
    private jettiesRepository: Repository<JettieEntity>,
  ) {}

  findAll(): Promise<JettieEntity[]> {
    return this.jettiesRepository.find();
  }

  async findOne(id: string): Promise<JettieEntity> {
    const entity = await this.jettiesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
