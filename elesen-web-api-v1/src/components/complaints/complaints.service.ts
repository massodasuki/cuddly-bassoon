import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComplaintEntity } from './complaints.entity';

@Injectable()
export class ComplaintService {
  constructor(
    @InjectRepository(ComplaintEntity)
    private complaintsRepository: Repository<ComplaintEntity>,
  ) {}

  findAll(): Promise<ComplaintEntity[]> {
    return this.complaintsRepository.find();
  }

  async findOne(id: string): Promise<ComplaintEntity> {
    const complaint = await this.complaintsRepository.findOneBy({ id });
    if (!complaint) {
      throw new NotFoundException();
    }
    return complaint;
  }
}

