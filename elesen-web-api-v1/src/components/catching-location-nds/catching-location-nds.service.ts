import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatchingLocationNd } from './catching-location-nds.entity';
import { CreateCatchingLocationNdDto } from './dto/create-catching-location-nd.dto';
import { UpdateCatchingLocationNdDto } from './dto/update-catching-location-nd.dto';

@Injectable()
export class CatchingLocationNdsService {
  constructor(
    @InjectRepository(CatchingLocationNd)
    private catchingLocationNdsRepository: Repository<CatchingLocationNd>,
  ) {}

  findAll(): Promise<CatchingLocationNd[]> {
    return this.catchingLocationNdsRepository.find();
  }

  async findOne(catching_location_id: string): Promise<CatchingLocationNd> {
    const catchingLocationNd = await this.catchingLocationNdsRepository.findOneBy({ catching_location_id });
    if (!catchingLocationNd) {
      throw new Error('CatchingLocationNd not found');
    }
    return catchingLocationNd;
  }

  async create(createCatchingLocationNdDto: CreateCatchingLocationNdDto): Promise<CatchingLocationNd> {
    const catchingLocationNd = this.catchingLocationNdsRepository.create(createCatchingLocationNdDto);
    return this.catchingLocationNdsRepository.save(catchingLocationNd);
  }

  async update(catching_location_id: string, updateCatchingLocationNdDto: UpdateCatchingLocationNdDto): Promise<CatchingLocationNd> {
    await this.catchingLocationNdsRepository.update(catching_location_id, updateCatchingLocationNdDto);
    return this.findOne(catching_location_id);
  }

  async remove(catching_location_id: string): Promise<void> {
    await this.catchingLocationNdsRepository.softDelete(catching_location_id);
  }
}
