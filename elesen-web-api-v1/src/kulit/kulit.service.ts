import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<KulitEntity> {
    return this.kulitRepository.findOneBy({ id });
  }
}
