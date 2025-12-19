import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationChangeVesselToolApprovalLogEntity } from './application-change-vessel-tool-approval-log.entity';
import { CreateApplicationChangeVesselToolApprovalLogDto } from './dto/create-application-change-vessel-tool-approval-log.dto';
import { UpdateApplicationChangeVesselToolApprovalLogDto } from './dto/update-application-change-vessel-tool-approval-log.dto';

@Injectable()
export class ApplicationChangeVesselToolApprovalLogService {
  constructor(
    @InjectRepository(ApplicationChangeVesselToolApprovalLogEntity)
    private applicationChangeVesselToolApprovalLogRepository: Repository<ApplicationChangeVesselToolApprovalLogEntity>,
  ) {}

  findAll(): Promise<ApplicationChangeVesselToolApprovalLogEntity[]> {
    return this.applicationChangeVesselToolApprovalLogRepository.find();
  }

  async findOne(id: string): Promise<ApplicationChangeVesselToolApprovalLogEntity> {
    const entity = await this.applicationChangeVesselToolApprovalLogRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationChangeVesselToolApprovalLogEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationChangeVesselToolApprovalLogDto: CreateApplicationChangeVesselToolApprovalLogDto): Promise<ApplicationChangeVesselToolApprovalLogEntity> {
    const entity = this.applicationChangeVesselToolApprovalLogRepository.create(createApplicationChangeVesselToolApprovalLogDto);
    return this.applicationChangeVesselToolApprovalLogRepository.save(entity);
  }

  async update(id: string, updateApplicationChangeVesselToolApprovalLogDto: UpdateApplicationChangeVesselToolApprovalLogDto): Promise<ApplicationChangeVesselToolApprovalLogEntity> {
    await this.applicationChangeVesselToolApprovalLogRepository.update(id, updateApplicationChangeVesselToolApprovalLogDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationChangeVesselToolApprovalLogRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationChangeVesselToolApprovalLogEntity[]> {
    return this.applicationChangeVesselToolApprovalLogRepository.find({
      where: { application_id: applicationId }
    });
  }
}