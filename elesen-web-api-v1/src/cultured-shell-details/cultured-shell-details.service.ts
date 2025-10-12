import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<CulturedShellDetailEntity> {
    return this.culturedShellDetailsRepository.findOneBy({ id });
  }
}
