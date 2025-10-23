import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratApplicationEntity } from './darat-applications.entity';
import { DaratApplicationResponseDto } from './dto/darat-application-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class DaratApplicationsService {
  constructor(
    @InjectRepository(DaratApplicationEntity)
    private readonly daratApplicationRepository: Repository<DaratApplicationEntity>
  ) {}

  async findAll(paginationQuery: PaginationQueryDto): Promise<DaratApplicationResponseDto> {
    const { limit = 10, page = 1 } = paginationQuery;

    const [data, total] = await this.daratApplicationRepository.findAndCount({
      relations: ['daratVesselInspection', 'daratVesselInspection.daratVessel', 'status'],
      take: limit,
      skip: (page - 1) * limit
    });

    const formatDate = (date: Date) => {
      const d = new Date(date);
      return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`;
    };

    const transformedData = data.map(item => ({
      noVesel: item.daratVesselInspection?.daratVessel?.registration_number || item.daratVesselInspection?.vessel_registration_number || '',
      tarikhPemeriksaan: item.inspection_date ? formatDate(item.inspection_date) : '',
      zonOperasi: item.daratVesselInspection?.inspection_location || '',
      penyediaanLaporan: item.status?.name || 'Dalam Semakan',
    }));

    return {
      data: transformedData,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}