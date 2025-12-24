import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Applications } from './entities/applications.entity';
// import { Inspections } from './entities/inspections.entity';
// import { DaratVessels } from './entities/darat-vessels.entity';
// import { DaratVesselInspections } from './entities/darat-vessel-inspections.entity';
// import { Vessels } from './entities/vessels.entity';
import { ApplicationListResponseDto } from './dto/application-list-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Applications)
    private applicationsRepository: Repository<Applications>,
    // @InjectRepository(Inspections)
    // private inspectionsRepository: Repository<Inspections>,
    // @InjectRepository(DaratVessels)
    // private daratVesselsRepository: Repository<DaratVessels>,
    // @InjectRepository(DaratVesselInspections)
    // private daratVesselInspectionsRepository: Repository<DaratVesselInspections>,
    // @InjectRepository(Vessels)
    // private vesselsRepository: Repository<Vessels>,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto): Promise<ApplicationListResponseDto[]> {
    const { limit = 10, page = 1, marin } = paginationQuery;
    const query = this.applicationsRepository
      .createQueryBuilder('app')
      .leftJoin('inspections', 'insp', 'insp.application_id = app.id')
      .leftJoin('darat_vessels', 'dv', 'dv.id = app.vessel_id')
      .leftJoin('darat_vessel_inspections', 'dvi', 'dvi.application_id = app.id')
      .leftJoin('vessels', 'v', 'v.id = app.vessel_id')
      .select([
        'app.id as applicationId',
        'app.vessel_id as vesselId',
        'app.user_id as userId',
        'COALESCE(v.vessel_no, dv.registration_number) as noVesel',
        'COALESCE(insp.inspection_date, dvi.inspection_date) as tarikhPemeriksaan',
        'v.zone as zonOperasi',
        'COALESCE(insp.inspection_status, dvi.inspection_summary) as penyediaanLaporan',
      ])
      .skip((page - 1) * limit)
      .take(limit);

    if (marin) {
      query.andWhere('v.zone = :marin', { marin });
    }

    const result = await query.getRawMany();

    return result.map(row => ({
      applicationId: row.applicationId,
      vesselId: row.vesselId,
      userId: row.userId,
      noVesel: row.noVesel,
      tarikhPemeriksaan: row.tarikhPemeriksaan,
      zonOperasi: row.zonOperasi,
      penyediaanLaporan: row.penyediaanLaporan,
    }));
  }

  async findOne(id: string, paginationQuery: PaginationQueryDto): Promise<ApplicationListResponseDto | null> {
    const query = this.applicationsRepository
      .createQueryBuilder('app')
      .leftJoin('inspections', 'insp', 'insp.application_id = app.id')
      .leftJoin('darat_vessels', 'dv', 'dv.id = app.vessel_id')
      .leftJoin('darat_vessel_inspections', 'dvi', 'dvi.application_id = app.id')
      .leftJoin('vessels', 'v', 'v.id = app.vessel_id')
      .select([
        'app.id as applicationId',
        'app.vessel_id as vesselId',
        'app.user_id as userId',
        'COALESCE(v.vessel_no, dv.registration_number) as noVesel',
        'COALESCE(insp.inspection_date, dvi.inspection_date) as tarikhPemeriksaan',
        'v.zone as zonOperasi',
        'COALESCE(insp.inspection_status, dvi.inspection_summary) as penyediaanLaporan',
      ])
      .where('app.id = :id', { id });

    const result = await query.getRawOne();

    if (!result) {
      return null;
    }

    return {
      applicationId: result.applicationId,
      vesselId: result.vesselId,
      userId: result.userId,
      noVesel: result.noVesel,
      tarikhPemeriksaan: result.tarikhPemeriksaan,
      zonOperasi: result.zonOperasi,
      penyediaanLaporan: result.penyediaanLaporan,
    };
  }
}