import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PpPt01RayuanLampiranEntity } from './pp-pt-01-rayuan-lampiran.entity';
import { CreatePpPt01RayuanLampiranDto } from './dto/create-pp-pt-01-rayuan-lampiran.dto';
import { UpdatePpPt01RayuanLampiranDto } from './dto/update-pp-pt-01-rayuan-lampiran.dto';

@Injectable()
export class PpPt01RayuanLampiranService {
  constructor(
    @InjectRepository(PpPt01RayuanLampiranEntity)
    private ppPt01RayuanLampiranRepository: Repository<PpPt01RayuanLampiranEntity>,
  ) {}

  findAll(): Promise<PpPt01RayuanLampiranEntity[]> {
    return this.ppPt01RayuanLampiranRepository.find();
  }

  async findOne(id: string): Promise<PpPt01RayuanLampiranEntity> {
    const entity = await this.ppPt01RayuanLampiranRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`PpPt01RayuanLampiranEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpPt01RayuanLampiranDto: CreatePpPt01RayuanLampiranDto): Promise<PpPt01RayuanLampiranEntity> {
    const entity = this.ppPt01RayuanLampiranRepository.create(createPpPt01RayuanLampiranDto);
    return this.ppPt01RayuanLampiranRepository.save(entity);
  }

  async update(id: string, updatePpPt01RayuanLampiranDto: UpdatePpPt01RayuanLampiranDto): Promise<PpPt01RayuanLampiranEntity> {
    await this.ppPt01RayuanLampiranRepository.update(id, updatePpPt01RayuanLampiranDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppPt01RayuanLampiranRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<PpPt01RayuanLampiranEntity[]> {
    return this.ppPt01RayuanLampiranRepository.find({
      where: { application_id: applicationId }
    });
  }
}