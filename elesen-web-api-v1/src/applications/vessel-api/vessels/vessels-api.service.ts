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
import { RoleEntity } from 'src/legacy/roles/roles.entity';
import { UserEntity } from '../../users/users/entities/user.entity';

@Injectable()
export class VesselsApiService {
  constructor(
    @InjectRepository(VesselEntity)
    private readonly vesselRepository: Repository<VesselEntity>,
    @InjectRepository(DaratVesselEntity)
    private readonly daratVesselRepository: Repository<DaratVesselEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,


  ) {}

  create(dto: CreateVesselDto) {
    const vessel = this.vesselRepository.create(dto);
    return this.vesselRepository.save(vessel);
  }


  private async getPaginatedData(
    page: number,
    pageSize: number,
    dataQuery: string,
    dataRepo: Repository<any>,
    totalQuery?: string,
    totalRepo?: Repository<any>
  ): Promise<{
    data: { id: string; vessel_no: string; zone: string; start_date: Date; end_date: Date; nelayan: string }[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }> {
    const data = await dataRepo.query(dataQuery);
    let total: number;
    if (totalQuery) {
      const totalResult = await (totalRepo || dataRepo).query(totalQuery);
      total = parseInt(totalResult[0].total);
    } else {
      total = await dataRepo.count();
    }
    const totalPages = Math.ceil(total / pageSize);
    return { data, total, page, pageSize, totalPages };
  }

  async findAllMinimalVessels(paginationQuery: PaginationQueryDto, jenis?: string, token?: any): Promise<{
    data: { id: string; vessel_no: string; zone: string; start_date: Date; end_date: Date; nelayan: string }[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }> {
    const { page = 1, limit = 10 } = paginationQuery;
    const pageSize = limit;
    const skip = (page - 1) * pageSize;

    console.log(jenis);
    console.log(token);

    let entityFilter = '';
    if (token?.username) {
      const user = await this.userRepository.findOneBy({ username: token.username });
      if (user?.entity_id) {
        entityFilter = `WHERE entity_id = '${user.entity_id}'`;
      }
    }

    if (jenis && jenis.toLowerCase() === 'marin') {
      const marinQuery = `
        SELECT id, vessel_no, zon AS zone, license_start AS start_date, license_end AS end_date, 'marin' AS nelayan FROM vessels ${entityFilter}
        LIMIT ${pageSize} OFFSET ${skip}
      `;
      return this.getPaginatedData(page, pageSize, marinQuery, this.vesselRepository);
    }

    if (jenis && jenis.toLowerCase() === 'darat') {
      const daratQuery = `
        SELECT dv.id, dv.registration_number AS registration_number, dv.transportation AS zone, dv.created_at AS start_date, dv.updated_at AS end_date, 'darat' AS nelayan FROM darat_vessels dv
        LIMIT ${pageSize} OFFSET ${skip}
      `;
      return this.getPaginatedData(page, pageSize, daratQuery, this.daratVesselRepository);
    }

    const unionQuery = `
      SELECT id, vessel_no, zon AS zone, license_start AS start_date, license_end AS end_date, 'marin' AS nelayan FROM vessels ${entityFilter}
      UNION
      SELECT dv.id, dv.registration_number AS registration_number, dv.transportation AS zone, dv.created_at AS start_date, dv.updated_at AS end_date, 'darat' AS nelayan FROM darat_vessels dv
      LIMIT ${pageSize} OFFSET ${skip}
    `;

    const totalQuery = `
      SELECT COUNT(*) as total FROM (
        SELECT id FROM vessels ${entityFilter.replace('WHERE', 'WHERE entity_id =')}
        UNION
        SELECT id FROM darat_vessels
      ) AS combined
    `;

    return this.getPaginatedData(page, pageSize, unionQuery, this.vesselRepository, totalQuery, this.vesselRepository);
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

