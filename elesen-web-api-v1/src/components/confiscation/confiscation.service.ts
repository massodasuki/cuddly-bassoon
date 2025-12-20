import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ConfiscationEntity> {
    const confiscation = await this.confiscationRepository.findOneBy({ id });
    if (!confiscation) {
      throw new NotFoundException();
    }
    return confiscation;
  }
}

