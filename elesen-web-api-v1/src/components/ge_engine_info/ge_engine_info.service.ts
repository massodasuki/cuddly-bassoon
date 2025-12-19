import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeEngineInfoEntity } from './ge_engine_info.entity';
import { CreateGeEngineInfoDto } from './dto/create-ge_engine_info.dto';
import { UpdateGeEngineInfoDto } from './dto/update-ge_engine_info.dto';

@Injectable()
export class GeEngineInfoService {
  constructor(
    @InjectRepository(GeEngineInfoEntity)
    private geEngineInfoRepository: Repository<GeEngineInfoEntity>,
  ) {}

  findAll(): Promise<GeEngineInfoEntity[]> {
    return this.geEngineInfoRepository.find();
  }

  async findOne(id: string): Promise<GeEngineInfoEntity> {
    const entity = await this.geEngineInfoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`GeEngineInfoEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createGeEngineInfoDto: CreateGeEngineInfoDto): Promise<GeEngineInfoEntity> {
    const entity = this.geEngineInfoRepository.create(createGeEngineInfoDto);
    return this.geEngineInfoRepository.save(entity);
  }

  async update(id: string, updateGeEngineInfoDto: UpdateGeEngineInfoDto): Promise<GeEngineInfoEntity> {
    await this.geEngineInfoRepository.update(id, updateGeEngineInfoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.geEngineInfoRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<GeEngineInfoEntity[]> {
    return this.geEngineInfoRepository.find({
      where: { application_id: applicationId }
    });
  }
}