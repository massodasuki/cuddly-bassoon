import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/common';
import { Repository } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class VesselsService {
  constructor(
    @InjectRepository(VesselEntity)
    private readonly vesselRepository: Repository<VesselEntity>,

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
  let query = this.vesselRepository
    .createQueryBuilder('vessel')
    .select([
      'vessel.id  AS id',
      'vessel.vessel_no  AS vessel_no',
      'vessel.zon  AS zone',
      'vessel.license_start AS start_date',
      'vessel.license_end AS end_date',
    ])

    
  const data = await query
    .skip(skip)
    .take(pageSize)
    .getRawMany();

  const total = await query.getCount();

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


}
