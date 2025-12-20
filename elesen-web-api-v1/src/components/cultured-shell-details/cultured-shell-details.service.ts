import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CulturedShellDetailEntity } from './cultured-shell-details.entity';

@Injectable()
export class CulturedShellDetailService {
  constructor(
    @InjectRepository(CulturedShellDetailEntity)
    private culturedShellDetailsRepository: Repository<CulturedShellDetailEntity>,
  ) {}

  findAll(): Promise<CulturedShellDetailEntity[]> {
    return this.culturedShellDetailsRepository.find();
  }

  async findOne(id: string): Promise<CulturedShellDetailEntity> {
    const culturedShellDetail = await this.culturedShellDetailsRepository.findOneBy({ id });
    if (!culturedShellDetail) {
      throw new NotFoundException();
    }
    return culturedShellDetail;
  }
}

