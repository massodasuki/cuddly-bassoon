import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratApplicationEntity } from './darat-applications.entity';

@Injectable()
export class DaratApplicationService {
  constructor(
    @InjectRepository(DaratApplicationEntity)
    private daratApplicationsRepository: Repository<DaratApplicationEntity>,
  ) {}

  findAll(): Promise<DaratApplicationEntity[]> {
    return this.daratApplicationsRepository.find();
  }

  async findOne(id: string): Promise<DaratApplicationEntity> {
    const daratApplication = await this.daratApplicationsRepository.findOneBy({ id });
    if (!daratApplication) {
      throw new NotFoundException();
    }
    return daratApplication;
  }
}
