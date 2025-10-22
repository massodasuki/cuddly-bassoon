import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratHelpAgencyFishermanEntity } from './darat-help-agency-fishermans.entity';

@Injectable()
export class DaratHelpAgencyFishermanService {
  constructor(
    @InjectRepository(DaratHelpAgencyFishermanEntity)
    private daratHelpAgencyFishermansRepository: Repository<DaratHelpAgencyFishermanEntity>,
  ) {}

  findAll(): Promise<DaratHelpAgencyFishermanEntity[]> {
    return this.daratHelpAgencyFishermansRepository.find();
  }

  async findOne(id: string): Promise<DaratHelpAgencyFishermanEntity> {
    const entity = await this.daratHelpAgencyFishermansRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
