import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { VesselEntity } from '../../marin/entities/vessel.entity';
import { CreateVesselDto } from './dto/create-vessel-api.dto';
import { UpdateVesselDto } from './dto/update-vessel-api.dto';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { DaratVesselEntity } from '../../darat/entities/darat-vessels.entity';
import { CreateDaratVesselDto } from '../../darat/darat-vessels/dto/create-darat-vessels.dto';
import { UpdateDaratVesselDto } from '../../darat/darat-vessels/dto/update-darat-vessels.dto';

@Injectable()
export class VesselsApiService {
  constructor(
    @InjectRepository(VesselEntity)
    private readonly vesselRepository: Repository<VesselEntity>,
    @InjectRepository(DaratVesselEntity)
    private readonly daratVesselRepository: Repository<DaratVesselEntity>,

  ) {}

  create(dto: CreateVesselDto) {
    const vessel = this.vesselRepository.create(dto);
    return this.vesselRepository.save(vessel);
  }


  async findAllMinimalVessels(paginationQuery: PaginationQueryDto, jenis? : string): Promise<{
  data: { id: string; vessel_no: string; zone: string; start_date: Date; end_date: Date, jenis_kulit: string}[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}> {
  const { page = 1, limit = 10 } = paginationQuery;
  const pageSize = limit;
  const skip = (page - 1) * pageSize;

  console.log(jenis);

  const unionQuery = `
    SELECT id, vessel_no, zon AS zone, license_start AS start_date, license_end AS end_date, 'vessel' AS jenis_kulit FROM vessels
    UNION
    SELECT dv.id, dv.registration_number AS vessel_no, dv.transportation AS zone, dv.created_at AS start_date, dv.updated_at AS end_date, 'darat' AS jenis_kulit FROM darat_vessels dv
    LIMIT ${pageSize} OFFSET ${skip}
  `;

  const data = await this.vesselRepository.query(unionQuery);

  const totalQuery = `
    SELECT COUNT(*) as total FROM (
      SELECT id FROM vessels
      UNION
      SELECT id FROM darat_vessels
    ) AS combined
  `;

  const totalResult = await this.vesselRepository.query(totalQuery);
  const total = parseInt(totalResult[0].total);

  const totalPages = Math.ceil(total / pageSize);

  return {
    data,
    total,
    page,
    pageSize,
    totalPages,
  };
}


   async findAll(paginationQuery: PaginationQueryDto) {
     const { limit = 10, page = 1 } = paginationQuery;
 
     const [data, total] = await this.vesselRepository.findAndCount({
      //  relations: ['appointment', 'pentadbirHartas', 'pemeriksaanVesel'],
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
 

  findOne(id: string) {
    return this.vesselRepository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateVesselDto) {
    await this.vesselRepository.update(id, {
      ...dto,
      updated_at: new Date(),
    });
    return this.vesselRepository.findOneBy({ id });
  }

  createDaratVessel(dto: CreateDaratVesselDto) {
    const daratVessel = this.daratVesselRepository.create(dto);
    return this.daratVesselRepository.save(daratVessel);
  }

  async findAllDaratVessels(paginationQuery: PaginationQueryDto) {
    const { limit = 10, page = 1 } = paginationQuery;

    const [data, total] = await this.daratVesselRepository.findAndCount({
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

  findOneDaratVessel(id: string) {
    return this.daratVesselRepository.findOneBy({ id });
  }

  async updateDaratVessel(id: string, dto: UpdateDaratVesselDto) {
    await this.daratVesselRepository.update(id, {
      ...dto,
      updated_at: new Date(),
    });
    return this.daratVesselRepository.findOneBy({ id });
  }


}

