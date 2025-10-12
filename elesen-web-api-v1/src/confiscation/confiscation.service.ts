import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfiscationEntity } from './confiscation.entity';

@Injectable()
export class ConfiscationEntityervice {
  constructor(
    @InjectRepository(ConfiscationEntity)
    private confiscationRepository: Repository<ConfiscationEntity>,
  ) {}

  findAll(): Promise<ConfiscationEntity[]> {
    return this.confiscationRepository.find();
  }

  findOne(id: string): Promise<ConfiscationEntity> {
    return this.confiscationRepository.findOneBy({ id });
  }
}
