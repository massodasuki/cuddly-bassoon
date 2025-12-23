import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiInspection } from './inspections.entity';

@Injectable()
export class InspectionsService {
  constructor(
    @InjectRepository(LpiInspection)
    private inspectionsRepository: Repository<LpiInspection>,
  ) {}

  findAll(): Promise<LpiInspection[]> {
    return this.inspectionsRepository.find();
  }
}