import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<LandingDeclareMonthlyLogEntity> {
    return this.landingDeclareMonthlyLogsRepository.findOneBy({ id });
  }
}
