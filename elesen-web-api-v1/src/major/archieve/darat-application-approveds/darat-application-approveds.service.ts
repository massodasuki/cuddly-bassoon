import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratApplicationApprovedEntity } from './darat-application-approveds.entity';

@Injectable()
export class DaratApplicationApprovedService {
  constructor(
    @InjectRepository(DaratApplicationApprovedEntity)
    private daratApplicationApprovedsRepository: Repository<DaratApplicationApprovedEntity>,
  ) {}

  findAll(): Promise<DaratApplicationApprovedEntity[]> {
    return this.daratApplicationApprovedsRepository.find();
  }

  async findOne(id: string): Promise<DaratApplicationApprovedEntity> {
    const daratApplicationApproved = await this.daratApplicationApprovedsRepository.findOneBy({ id });
    if (!daratApplicationApproved) {
      throw new NotFoundException();
    }
    return daratApplicationApproved;
  }
}
