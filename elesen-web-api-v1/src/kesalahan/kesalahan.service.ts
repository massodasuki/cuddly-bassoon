import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<KesalahanEntity> {
    return this.kesalahanRepository.findOneBy({ id });
  }
}
