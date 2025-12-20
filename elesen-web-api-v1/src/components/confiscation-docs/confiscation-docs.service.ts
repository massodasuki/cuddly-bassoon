import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ConfiscationDocEntity> {
    const confiscationDoc = await this.confiscationDocsRepository.findOneBy({ id });
    if (!confiscationDoc) {
      throw new NotFoundException();
    }
    return confiscationDoc;
  }
}

