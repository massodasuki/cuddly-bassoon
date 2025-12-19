import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PpPt01ApprovalsEntity } from './pp-pt-01-approvals.entity';
import { CreatePpPt01ApprovalsDto } from './dto/create-pp-pt-01-approvals.dto';
import { UpdatePpPt01ApprovalsDto } from './dto/update-pp-pt-01-approvals.dto';

@Injectable()
export class PpPt01ApprovalsService {
  constructor(
    @InjectRepository(PpPt01ApprovalsEntity)
    private ppPt01ApprovalsRepository: Repository<PpPt01ApprovalsEntity>,
  ) {}

  findAll(): Promise<PpPt01ApprovalsEntity[]> {
    return this.ppPt01ApprovalsRepository.find();
  }

  async findOne(id: string): Promise<PpPt01ApprovalsEntity> {
    const entity = await this.ppPt01ApprovalsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`PpPt01ApprovalsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpPt01ApprovalsDto: CreatePpPt01ApprovalsDto): Promise<PpPt01ApprovalsEntity> {
    const entity = this.ppPt01ApprovalsRepository.create(createPpPt01ApprovalsDto);
    return this.ppPt01ApprovalsRepository.save(entity);
  }

  async update(id: string, updatePpPt01ApprovalsDto: UpdatePpPt01ApprovalsDto): Promise<PpPt01ApprovalsEntity> {
    await this.ppPt01ApprovalsRepository.update(id, updatePpPt01ApprovalsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppPt01ApprovalsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<PpPt01ApprovalsEntity[]> {
    return this.ppPt01ApprovalsRepository.find({
      where: { application_id: applicationId }
    });
  }
}