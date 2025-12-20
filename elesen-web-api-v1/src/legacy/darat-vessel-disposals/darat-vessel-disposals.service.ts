import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVesselDisposalEntity } from './darat-vessel-disposals.entity';

@Injectable()
export class DaratVesselDisposalService {
  constructor(
    @InjectRepository(DaratVesselDisposalEntity)
    private daratVesselDisposalsRepository: Repository<DaratVesselDisposalEntity>,
  ) {}

  findAll(): Promise<DaratVesselDisposalEntity[]> {
    return this.daratVesselDisposalsRepository.find();
  }

  async findOne(id: string): Promise<DaratVesselDisposalEntity> {
    const entity = await this.daratVesselDisposalsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

