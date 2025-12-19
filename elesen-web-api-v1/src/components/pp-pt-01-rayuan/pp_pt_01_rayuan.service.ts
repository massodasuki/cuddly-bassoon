import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PpPt01RayuanEntity } from './pp_pt_01_rayuan.entity';
import { CreatePpPt01RayuanDto } from './dto/create-pp_pt_01_rayuan.dto';
import { UpdatePpPt01RayuanDto } from './dto/update-pp_pt_01_rayuan.dto';

@Injectable()
export class PpPt01RayuanService {
  constructor(
    @InjectRepository(PpPt01RayuanEntity)
    private ppPt01RayuanRepository: Repository<PpPt01RayuanEntity>,
  ) {}

  findAll(): Promise<PpPt01RayuanEntity[]> {
    return this.ppPt01RayuanRepository.find();
  }

  async findOne(id: string): Promise<PpPt01RayuanEntity> {
    const entity = await this.ppPt01RayuanRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`PpPt01RayuanEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpPt01RayuanDto: CreatePpPt01RayuanDto): Promise<PpPt01RayuanEntity> {
    const entity = this.ppPt01RayuanRepository.create(createPpPt01RayuanDto);
    return this.ppPt01RayuanRepository.save(entity);
  }

  async update(id: string, updatePpPt01RayuanDto: UpdatePpPt01RayuanDto): Promise<PpPt01RayuanEntity> {
    await this.ppPt01RayuanRepository.update(id, updatePpPt01RayuanDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppPt01RayuanRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<PpPt01RayuanEntity[]> {
    return this.ppPt01RayuanRepository.find({
      where: { application_id: applicationId }
    });
  }
}