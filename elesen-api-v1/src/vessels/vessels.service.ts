import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Vessels } from './entities/vessel.entity';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { ProfilePentadbirHartas } from './entities/profile-pentadbir-hartas.entity';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Injectable()
export class VesselsService {
  constructor(
    @InjectRepository(Vessels)
    private readonly vesselRepository: Repository<Vessels>,

    @InjectRepository(ProfilePentadbirHartas)
    private readonly pentadbirHartasRepository: Repository<ProfilePentadbirHartas>,

    @InjectRepository(VesselInspection)
    private readonly vesselInspectionRepository: Repository<VesselInspection>,
  ) {}

  create(dto: CreateVesselDto) {
    const vessel = this.vesselRepository.create(dto);
    return this.vesselRepository.save(vessel);
  }


  async findAllMinimalVessels(paginationQuery: PaginationQueryDto): Promise<{
  data: { id: string; vessel_no: string; zone: string; start_date: Date; end_date: Date, jenis_kulit: string}[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}> {
  const { page = 1, limit = 10 } = paginationQuery;
  const pageSize = limit;
  const skip = (page - 1) * pageSize;

  let query = this.vesselRepository
    .createQueryBuilder('vessel')
    .leftJoin('vessel.appointment', 'appointment')
    .leftJoin('vessel.pentadbirHartas', 'pentadbirHartas')
    .innerJoin('vessel.pemeriksaanVesel', 'pemeriksaanVesel')
    .innerJoin('pemeriksaanVesel.infoVessel', 'infoVessel')
    .select([
      'vessel.id  AS id',
      'vessel.vessel_no  AS vessel_no',
      'vessel.zone  AS zone',
      'vessel.start_date AS start_date',
      'vessel.end_date AS end_date',
      'infoVessel.jenisKulit AS jenis_kulit'
    ])
    // .where('vessel.entity_id IS NULL');

    
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
       relations: ['appointment', 'pentadbirHartas', 'pemeriksaanVesel'],
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

  async getVesselDetails(vesselNo: string) {
    // const data = await this.vesselRepository.findOne({
    //   where: { vessel_no: vesselNo },
    //   relations: [
    //     'user',
    //     'user.profilePentadbirHarta',
    //     'user.entity',
    //   ],
    // });

    const data = await this.vesselRepository.findOne({
      where: { vesselNo: vesselNo },
      relations: ['pentadbirHartas'],
    })

    let pentadbirId = data?.pentadbirHartas.id;
    const pentadbirHartas = await this.pentadbirHartasRepository.findOne({
      where: { id: pentadbirId },
      relations: ['user', 'vesselOwner'],
    })

    console.log(pentadbirHartas);
    if (!data) {
      throw new NotFoundException(`No data found for vessel_no ${vesselNo}`);
    }

    return { vessel: data, pentadbirHartas };
  }

  async update(id: string, dto: UpdateVesselDto) {
    await this.vesselRepository.update(id, {
      ...dto,
      updatedAt: new Date(),
    });
    return this.vesselRepository.findOneBy({ id });
  }

  

  async remove(id: number, deletedBy: number) {
    await this.vesselRepository.update(id, {
      isActive: false,
      deletedBy: deletedBy,
      deletedAt: new Date(),
    });
    return { deleted: true };
  }
}
