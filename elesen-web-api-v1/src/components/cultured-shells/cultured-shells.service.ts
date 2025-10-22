import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<CulturedShellEntity> {
    const culturedShell = await this.culturedShellsRepository.findOneBy({ id });
    if (!culturedShell) {
      throw new NotFoundException();
    }
    return culturedShell;
  }
}
