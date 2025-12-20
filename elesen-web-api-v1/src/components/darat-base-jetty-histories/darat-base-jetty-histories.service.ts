import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratBaseJettyHistorieEntity } from './darat-base-jetty-histories.entity';

@Injectable()
export class DaratBaseJettyHistorieService {
  constructor(
    @InjectRepository(DaratBaseJettyHistorieEntity)
    private daratBaseJettyHistoriesRepository: Repository<DaratBaseJettyHistorieEntity>,
  ) {}

  findAll(): Promise<DaratBaseJettyHistorieEntity[]> {
    return this.daratBaseJettyHistoriesRepository.find();
  }

  async findOne(id: string): Promise<DaratBaseJettyHistorieEntity> {
    const daratBaseJettyHistorie = await this.daratBaseJettyHistoriesRepository.findOneBy({ id });
    if (!daratBaseJettyHistorie) {
      throw new NotFoundException();
    }
    return daratBaseJettyHistorie;
  }
}

