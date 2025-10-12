import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<EnjinEntity> {
    return this.enjinRepository.findOneBy({ id });
  }
}
