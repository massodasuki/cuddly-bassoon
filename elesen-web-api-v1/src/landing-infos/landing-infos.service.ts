import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingInfoEntity } from './landing-infos.entity';

@Injectable()
export class LandingInfoService {
  constructor(
    @InjectRepository(LandingInfoEntity)
    private landingInfosRepository: Repository<LandingInfoEntity>,
  ) {}

  findAll(): Promise<LandingInfoEntity[]> {
    return this.landingInfosRepository.find();
  }

  findOne(id: string): Promise<LandingInfoEntity> {
    return this.landingInfosRepository.findOneBy({ id });
  }
}
