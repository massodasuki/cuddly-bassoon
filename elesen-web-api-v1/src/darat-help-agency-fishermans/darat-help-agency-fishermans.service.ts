import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<DaratHelpAgencyFishermanEntity> {
    return this.daratHelpAgencyFishermansRepository.findOneBy({ id });
  }
}
