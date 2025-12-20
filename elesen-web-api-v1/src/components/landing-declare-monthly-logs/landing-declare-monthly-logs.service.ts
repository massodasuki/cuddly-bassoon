import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingDeclareMonthlyLogEntity } from './landing-declare-monthly-logs.entity';

@Injectable()
export class LandingDeclareMonthlyLogService {
  constructor(
    @InjectRepository(LandingDeclareMonthlyLogEntity)
    private landingDeclareMonthlyLogsRepository: Repository<LandingDeclareMonthlyLogEntity>,
  ) {}

  findAll(): Promise<LandingDeclareMonthlyLogEntity[]> {
    return this.landingDeclareMonthlyLogsRepository.find();
  }

  async findOne(id: string): Promise<LandingDeclareMonthlyLogEntity> {
    const entity = await this.landingDeclareMonthlyLogsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

