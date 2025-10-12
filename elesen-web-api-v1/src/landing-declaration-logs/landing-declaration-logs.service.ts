import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingDeclarationLogEntity } from './landing-declaration-logs.entity';

@Injectable()
export class LandingDeclarationLogService {
  constructor(
    @InjectRepository(LandingDeclarationLogEntity)
    private landingDeclarationLogsRepository: Repository<LandingDeclarationLogEntity>,
  ) {}

  findAll(): Promise<LandingDeclarationLogEntity[]> {
    return this.landingDeclarationLogsRepository.find();
  }

  async findOne(id: string): Promise<LandingDeclarationLogEntity> {
    const entity = await this.landingDeclarationLogsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
