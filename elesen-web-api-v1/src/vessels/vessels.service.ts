import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselEntity } from './vessels.entity';

@Injectable()
export class VesselService {
  constructor(
    @InjectRepository(VesselEntity)
    private vesselsRepository: Repository<VesselEntity>,
  ) {}

  findAll(): Promise<VesselEntity[]> {
    return this.vesselsRepository.find();
  }

  findOne(id: string): Promise<VesselEntity> {
    return this.vesselsRepository.findOneBy({ id });
  }
}
