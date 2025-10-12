import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratUserFishermanInfoEntity } from './darat-user-fisherman-infos.entity';

@Injectable()
export class DaratUserFishermanInfoService {
  constructor(
    @InjectRepository(DaratUserFishermanInfoEntity)
    private daratUserFishermanInfosRepository: Repository<DaratUserFishermanInfoEntity>,
  ) {}

  findAll(): Promise<DaratUserFishermanInfoEntity[]> {
    return this.daratUserFishermanInfosRepository.find();
  }

  findOne(id: string): Promise<DaratUserFishermanInfoEntity> {
    return this.daratUserFishermanInfosRepository.findOneBy({ id });
  }
}
