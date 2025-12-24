import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Applications } from './entities/applications.entity';
import { Inspections } from './entities/inspections.entity';
// import { DaratVessels } from './entities/darat-vessels.entity';
// import { DaratVesselInspections } from './entities/darat-vessel-inspections.entity';
// import { Vessels } from './entities/vessels.entity';
import { ApplicationListResponseDto } from './dto/application-list-response.dto';
import { InspectionApplicationListResponseDto } from './dto/inspection-application-list-response.dto';
import { PaginatedInspectionApplicationListResponseDto } from './dto/paginated-inspection-application-list-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { UsersService } from '../users/users/users.service';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Applications)
    private applicationsRepository: Repository<Applications>,
    @InjectRepository(Inspections)
    private inspectionsRepository: Repository<Inspections>,
    // @InjectRepository(DaratVessels)
    // private daratVesselsRepository: Repository<DaratVessels>,
    // @InjectRepository(DaratVesselInspections)
    // private daratVesselInspectionsRepository: Repository<DaratVesselInspections>,
    // @InjectRepository(Vessels)
    // private vesselsRepository: Repository<Vessels>,
    private usersService: UsersService,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto, user?: any): Promise<ApplicationListResponseDto[]> {
    const { limit = 10, page = 1, marin, type } = paginationQuery;
    const query = this.applicationsRepository
      .createQueryBuilder('app')
      .leftJoin('code_masters', 'cm', 'cm.id = app.application_type_id')
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

    if (user?.username) {
      const dbUser = await this.usersService.findByUsername(user.username);
      if (dbUser?.entity_id) {
        query.andWhere('app.entity_id = :entityId', { entityId: dbUser.entity_id });
      }
    }

    if (marin && marin.length > 0) {
      const normalizedMarin = marin.map(m => m.toLowerCase().trim());
      query.andWhere('LOWER(TRIM(v.zone)) IN (:...marin)', { marin: normalizedMarin });
    }

    if (type) {
      query.andWhere('cm.type = :type', { type });
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

  async findInspections(paginationQuery: PaginationQueryDto, user?: any): Promise<PaginatedInspectionApplicationListResponseDto> {
    const { borang, zone, limit = 10, page = 1 } = paginationQuery;
    console.log(zone)

    let entityId: string | undefined | null;
    if (user?.username) {
      const dbUser = await this.usersService.findByUsername(user.username);
      entityId = dbUser?.entity_id ? dbUser.entity_id : null;;
    }

    const baseQuery = this.inspectionsRepository
      .createQueryBuilder('i')
      .leftJoin('applications', 'app', 'i.application_id = app.id')
      .leftJoin('code_masters', 'cm', 'cm.id = app.application_type_id')
      .leftJoin('darat_vessels', 'dv', 'dv.id = app.vessel_id')
      .leftJoin('darat_vessel_inspections', 'dvi', 'dvi.application_id = app.id')
      .leftJoin('vessels', 'v', 'v.id = app.vessel_id')
      .where('COALESCE(v.vessel_no, dv.registration_number) IS NOT NULL');

    if (entityId) {
      baseQuery.andWhere('app.entity_id = :entityId', { entityId });
    }

    const conditions: string[] = [];
    const params: any = {};
    if (borang) {
      conditions.push('cm.code = :borang');
      params.borang = borang;
    }
    if (zone) {
      conditions.push('v.zone = :zone');
      params.zone = zone;
    }
    if (conditions.length > 0) {
      baseQuery.andWhere(`(${conditions.join(' OR ')})`, params);
    }

    const countQuery = baseQuery.clone().select('COUNT(*) as total');
    const totalResult = await countQuery.getRawOne();
    const total = parseInt(totalResult.total);

    const query = baseQuery
      .select([
        'app.id AS applicationId',
        'app.vessel_id AS vesselId',
        'app.user_id AS userId',
        'COALESCE(v.vessel_no, dv.registration_number) AS noVesel',
        'i.inspection_date AS tarikhPemeriksaan',
        'v.zone AS zonOperasi',
        'i.inspection_status AS penyediaanLaporan',
        'cm.code AS codeMasterCode',
        'cm.name AS codeMasterName',
      ])
      .orderBy('(i.inspection_date IS NULL)', 'ASC')
      .addOrderBy('i.inspection_date', 'ASC')
      .skip((page - 1) * limit)
      .take(limit);

    const result = await query.getRawMany();

    const data = result.map(row => ({
      applicationId: row.applicationId,
      vesselId: row.vesselId,
      userId: row.userId,
      noVesel: row.noVesel,
      tarikhPemeriksaan: row.tarikhPemeriksaan,
      zonOperasi: row.zonOperasi,
      penyediaanLaporan: row.penyediaanLaporan,
      codeMasterCode: row.codeMasterCode,
      codeMasterName: row.codeMasterName,
    }));

    return { data, total, page, limit };
  }
}