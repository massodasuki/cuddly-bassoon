import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Applications } from './entities/applications.entity';
import { Inspections } from './entities/inspections.entity';
import { Vessels } from './entities/vessels.entity';
import { ApplicationListResponseDto } from './dto/application-list-response.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Applications)
    private applicationsRepository: Repository<Applications>,
    @InjectRepository(Inspections)
    private inspectionsRepository: Repository<Inspections>,
    @InjectRepository(Vessels)
    private vesselsRepository: Repository<Vessels>,
  ) {}

  async findAll(): Promise<ApplicationListResponseDto[]> {
    const query = this.applicationsRepository
      .createQueryBuilder('app')
      .leftJoin('inspections', 'insp', 'insp.application_id = app.id')
      .leftJoin('vessels', 'ves', 'ves.id = app.vessel_id')
      .select([
        'app.id as applicationId',
        'app.vessel_id as vesselId',
        'app.user_id as userId',
        'ves.vessel_no as noVesel',
        'insp.inspection_date as tarikhPemeriksaan',
        'ves.zone as zonOperasi',
        'insp.inspection_status as penyediaanLaporan',
      ]);

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
}