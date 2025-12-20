import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratUserDetailEntity } from './darat-user-details.entity';

@Injectable()
export class DaratUserDetailService {
  constructor(
    @InjectRepository(DaratUserDetailEntity)
    private daratUserDetailsRepository: Repository<DaratUserDetailEntity>,
  ) {}

  findAll(): Promise<DaratUserDetailEntity[]> {
    return this.daratUserDetailsRepository.find();
  }

  async findOne(id: string): Promise<DaratUserDetailEntity> {
    const entity = await this.daratUserDetailsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

