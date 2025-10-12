import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfiscationDocEntity } from './confiscation-docs.entity';

@Injectable()
export class ConfiscationDocService {
  constructor(
    @InjectRepository(ConfiscationDocEntity)
    private confiscationDocsRepository: Repository<ConfiscationDocEntity>,
  ) {}

  findAll(): Promise<ConfiscationDocEntity[]> {
    return this.confiscationDocsRepository.find();
  }

  findOne(id: string): Promise<ConfiscationDocEntity> {
    return this.confiscationDocsRepository.findOneBy({ id });
  }
}
