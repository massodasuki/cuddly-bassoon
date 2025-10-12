import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ComplaintEntity> {
    return this.complaintsRepository.findOneBy({ id });
  }
}
