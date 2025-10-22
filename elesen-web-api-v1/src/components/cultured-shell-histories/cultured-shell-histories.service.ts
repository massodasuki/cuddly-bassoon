import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CulturedShellHistorieEntity } from './cultured-shell-histories.entity';

@Injectable()
export class CulturedShellHistorieService {
  constructor(
    @InjectRepository(CulturedShellHistorieEntity)
    private culturedShellHistoriesRepository: Repository<CulturedShellHistorieEntity>,
  ) {}

  findAll(): Promise<CulturedShellHistorieEntity[]> {
    return this.culturedShellHistoriesRepository.find();
  }

  async findOne(id: string): Promise<CulturedShellHistorieEntity> {
    const culturedShellHistorie = await this.culturedShellHistoriesRepository.findOneBy({ id });
    if (!culturedShellHistorie) {
      throw new NotFoundException();
    }
    return culturedShellHistorie;
  }
}
