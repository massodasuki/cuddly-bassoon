import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratApplicationEntity } from './darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';
import { DaratApplicationResponseDto } from './dto/darat-application-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class DaratApplicationsService {
  constructor(
    @InjectRepository(DaratApplicationEntity)
    private readonly daratApplicationRepository: Repository<DaratApplicationEntity>,
    @InjectRepository(DaratVesselEntity)
    private readonly daratVesselRepository: Repository<DaratVesselEntity>
  ) {}

  private async getUserVesselRegistrationNumbers(userId: string): Promise<string[]> {
    const userVessels = await this.daratVesselRepository.find({
      where: { user_id: userId },
      select: ['registration_number']
    });
    return userVessels
      .map(vessel => vessel.registration_number)
      .filter(regNum => regNum && regNum.trim() !== '');
  }

  async findAll(paginationQuery: PaginationQueryDto): Promise<DaratApplicationResponseDto> {
    const { limit = 10, page = 1 } = paginationQuery;

    const [data, total] = await this.daratApplicationRepository.findAndCount({
      relations: ['daratVesselInspection', 'daratVessel', 'status'],
      take: limit,
      skip: (page - 1) * limit
    });

    const formatDate = (date: Date) => {
      const d = new Date(date);
      return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`;
    };

    const transformedData = await Promise.all(data.map(async item => {
      // Get all vessel registration numbers for this user
      const userVesselRegNums = await this.getUserVesselRegistrationNumbers(item.user_id);
      
      // Try multiple sources in order, pick the first non-empty value
      const noVesel =
        item.daratVesselInspection?.daratVessel?.registration_number ||
        item.daratVessel?.registration_number ||
        item.daratVesselInspection?.vessel_registration_number ||
        userVesselRegNums[0] || // First vessel from user's vessels
        '';
      
      return {
        applicationId : item.id,
        vesselId : item.daratVesselInspection?.daratVessel?.id || item.daratVessel?.id || "",
        userId : item.user_id,
        noVesel,
        tarikhPemeriksaan: item.inspection_date ? formatDate(item.inspection_date) : '',
        zonOperasi: item.daratVesselInspection?.inspection_location || '',
        penyediaanLaporan: item.status?.name || 'Dalam Semakan',
      };
    }));

    return {
      data: transformedData,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(@Param('id') id: string, paginationQuery: PaginationQueryDto): Promise<DaratApplicationResponseDto> {
    const { limit = 10, page = 1 } = paginationQuery;

    const [data, total] = await this.daratApplicationRepository.findAndCount({
      where : { id },
      relations: ['daratVesselInspection', 'daratVessel', 'status'],
      take: limit,
      skip: (page - 1) * limit
    });

    const formatDate = (date: Date) => {
      const d = new Date(date);
      return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`;
    };

    const transformedData = await Promise.all(data.map(async item => {
      // Get all vessel registration numbers for this user
      const userVesselRegNums = await this.getUserVesselRegistrationNumbers(item.user_id);
      
      // Try multiple sources in order, pick the first non-empty value
      const noVesel =
        item.daratVesselInspection?.daratVessel?.registration_number ||
        item.daratVessel?.registration_number ||
        item.daratVesselInspection?.vessel_registration_number ||
        userVesselRegNums[0] || // First vessel from user's vessels
        '';
      
      return {
        applicationId : item.id,
        vesselId : item.daratVesselInspection?.daratVessel?.id || item.daratVessel?.id || "",
        userId : item.user_id,
        noVesel,
        tarikhPemeriksaan: item.inspection_date ? formatDate(item.inspection_date) : '',
        zonOperasi: item.daratVesselInspection?.inspection_location || '',
        penyediaanLaporan: item.status?.name || 'Dalam Semakan',
      };
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