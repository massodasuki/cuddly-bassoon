import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FullInspectionLpisEntity } from './full_inspection_lpis.entity';
import { CreateFullInspectionLpisDto } from './dto/create-full_inspection_lpis.dto';
import { UpdateFullInspectionLpisDto } from './dto/update-full_inspection_lpis.dto';

@Injectable()
export class FullInspectionLpisService {
  constructor(
    @InjectRepository(FullInspectionLpisEntity)
    private fullInspectionLpisRepository: Repository<FullInspectionLpisEntity>,
  ) {}

  findAll(): Promise<FullInspectionLpisEntity[]> {
    return this.fullInspectionLpisRepository.find();
  }

  async findOne(id: string): Promise<FullInspectionLpisEntity> {
    const entity = await this.fullInspectionLpisRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`FullInspectionLpisEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createFullInspectionLpisDto: CreateFullInspectionLpisDto): Promise<FullInspectionLpisEntity> {
    const entity = this.fullInspectionLpisRepository.create(createFullInspectionLpisDto);
    return this.fullInspectionLpisRepository.save(entity);
  }

  async update(id: string, updateFullInspectionLpisDto: UpdateFullInspectionLpisDto): Promise<FullInspectionLpisEntity> {
    await this.fullInspectionLpisRepository.update(id, updateFullInspectionLpisDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.fullInspectionLpisRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<FullInspectionLpisEntity[]> {
    return this.fullInspectionLpisRepository.find({
      where: { application_id: applicationId }
    });
  }
}