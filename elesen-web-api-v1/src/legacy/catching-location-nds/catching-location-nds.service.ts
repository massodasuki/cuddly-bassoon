import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatchingLocationNdEntity } from './catching-location-nds.entity';
import { CreateCatchingLocationNdDto } from './dto/create-catching-location-nd.dto';
import { UpdateCatchingLocationNdDto } from './dto/update-catching-location-nd.dto';

@Injectable()
export class CatchingLocationNdsService {
  constructor(
    @InjectRepository(CatchingLocationNdEntity)
    private catchingLocationNdsRepository: Repository<CatchingLocationNdEntity>,
  ) {}

  findAll(): Promise<CatchingLocationNdEntity[]> {
    return this.catchingLocationNdsRepository.find();
  }

  async findOne(catching_location_id: string): Promise<CatchingLocationNdEntity> {
    const catchingLocationNd = await this.catchingLocationNdsRepository.findOneBy({ catching_location_id });
    if (!catchingLocationNd) {
      throw new Error('CatchingLocationNd not found');
    }
    return catchingLocationNd;
  }

  async create(createCatchingLocationNdDto: CreateCatchingLocationNdDto): Promise<CatchingLocationNdEntity> {
    const catchingLocationNd = this.catchingLocationNdsRepository.create(createCatchingLocationNdDto);
    return this.catchingLocationNdsRepository.save(catchingLocationNd);
  }

  async update(catching_location_id: string, updateCatchingLocationNdDto: UpdateCatchingLocationNdDto): Promise<CatchingLocationNdEntity> {
    await this.catchingLocationNdsRepository.update(catching_location_id, updateCatchingLocationNdDto);
    return this.findOne(catching_location_id);
  }

  async remove(catching_location_id: string): Promise<void> {
    await this.catchingLocationNdsRepository.softDelete(catching_location_id);
  }
}
