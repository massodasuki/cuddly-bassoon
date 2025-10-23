import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratApplicationEntity } from './darat-applications.entity';
import { DaratVesselInspectionEntity } from '../darat-vessel-inspections/darat-vessel-inspections.entity';
import { CodeMaster } from '../code-masters/code-masters.entity';
import { DaratApplicationResponseDto, DaratApplicationItemDto } from './dto/darat-application-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class DaratApplicationsService {
  constructor(
    @InjectRepository(DaratApplicationEntity)
    private readonly daratApplicationRepository: Repository<DaratApplicationEntity>,
    @InjectRepository(DaratVesselInspectionEntity)
    private readonly daratVesselInspectionRepository: Repository<DaratVesselInspectionEntity>,
    @InjectRepository(CodeMaster)
    private readonly codeMasterRepository: Repository<CodeMaster>,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto) {
    const { limit = 10, page = 1 } = paginationQuery;

    const [data, total] = await this.daratApplicationRepository.findAndCount({
      relations: ['daratVesselInspection'],
      take: limit,
      skip: (page - 1) * limit
    });

    return {
      data,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}