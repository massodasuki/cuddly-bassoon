import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CulturedShellEntity } from './cultured-shells.entity';

@Injectable()
export class CulturedShellService {
  constructor(
    @InjectRepository(CulturedShellEntity)
    private culturedShellsRepository: Repository<CulturedShellEntity>,
  ) {}

  findAll(): Promise<CulturedShellEntity[]> {
    return this.culturedShellsRepository.find();
  }

  findOne(id: string): Promise<CulturedShellEntity> {
    return this.culturedShellsRepository.findOneBy({ id });
  }
}
