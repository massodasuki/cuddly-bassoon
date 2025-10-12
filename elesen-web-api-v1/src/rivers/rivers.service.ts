import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RiverEntity } from './rivers.entity';

@Injectable()
export class RiverService {
  constructor(
    @InjectRepository(RiverEntity)
    private riversRepository: Repository<RiverEntity>,
  ) {}

  findAll(): Promise<RiverEntity[]> {
    return this.riversRepository.find();
  }

  findOne(id: string): Promise<RiverEntity> {
    return this.riversRepository.findOneBy({ id });
  }
}
