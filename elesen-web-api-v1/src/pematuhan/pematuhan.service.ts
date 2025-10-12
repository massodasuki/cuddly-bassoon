import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<PematuhanEntity> {
    return this.pematuhanRepository.findOneBy({ id });
  }
}
