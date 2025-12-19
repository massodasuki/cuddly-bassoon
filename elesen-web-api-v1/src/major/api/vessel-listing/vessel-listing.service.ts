// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, Like } from 'typeorm';
// import { VesselEntity } from '../common/entities';
// // Placeholder for DaratVesselEntity
// class DaratVesselEntity {}
// import { CombinedVesselDto, CombinedVesselResponseDto, VesselListingQueryDto } from './dto/combined-vessel.dto';

// @Injectable()
// export class VesselListingService {
//   constructor(
//     @InjectRepository(VesselEntity)
//     private readonly vesselRepository: Repository<VesselEntity>,
    
//     @InjectRepository(DaratVesselEntity)
//     private readonly daratVesselRepository: Repository<DaratVesselEntity>,
//   ) {}

//   async findAllCombinedVessels(query: VesselListingQueryDto): Promise<CombinedVesselResponseDto> {
//     const { page = 1, limit = 10, vessel_type = 'all', search, is_active } = query;
//     const pageSize = limit;
//     const skip = (page - 1) * pageSize;

//     let combinedData: CombinedVesselDto[] = [];
//     let regularCount = 0;
//     let daratCount = 0;

//     // Fetch regular vessels if not filtered to darat only
//     if (vessel_type === 'all' || vessel_type === 'regular') {
//       const regularVessels = await this.getRegularVessels(skip, pageSize, search, is_active);
//       regularCount = await this.getRegularVesselsCount(search, is_active);
      
//       const mappedRegularVessels: CombinedVesselDto[] = regularVessels.map(vessel => ({
//         id: vessel.id,
//         vessel_type: 'regular',
//         registration_number: vessel.no_pendaftaran,
//         vessel_no: vessel.vessel_no,
//         zone: vessel.zon || vessel.zone,
//         length: undefined,
//         width: undefined,
//         depth: undefined,
//         grt: vessel.grt,
//         peralatan_utama: vessel.peralatan_utama,
//         negeri: vessel.negeri,
//         daerah: vessel.daerah,
//         pangkalan: vessel.pangkalan,
//         bil_enjin: vessel.bil_enjin,
//         kategori_vessel: vessel.kategori_vessel,
//         license_start: vessel.license_start,
//         license_end: vessel.license_end,
//         transportation: undefined,
//         own_vessel: undefined,
//         is_approved: undefined,
//         is_active: vessel.is_active ? 1 : 0,
//         user_id: vessel.user_id,
//         created_at: vessel.created_at,
//         updated_at: vessel.updated_at,
//       }));

//       combinedData = [...combinedData, ...mappedRegularVessels];
//     }

//     // Fetch darat vessels if not filtered to regular only
//     if (vessel_type === 'all' || vessel_type === 'darat') {
//       const daratVessels = await this.getDaratVessels(skip, pageSize, search, is_active);
//       daratCount = await this.getDaratVesselsCount(search, is_active);
      
//       const mappedDaratVessels: CombinedVesselDto[] = daratVessels.map(vessel => ({
//         id: vessel.id,
//         vessel_type: 'darat',
//         registration_number: vessel.registration_number,
//         vessel_no: undefined,
//         zone: undefined,
//         length: vessel.length,
//         width: vessel.width,
//         depth: vessel.depth,
//         grt: undefined,
//         peralatan_utama: undefined,
//         negeri: undefined,
//         daerah: undefined,
//         pangkalan: undefined,
//         bil_enjin: undefined,
//         kategori_vessel: undefined,
//         license_start: undefined,
//         license_end: undefined,
//         transportation: vessel.transportation,
//         own_vessel: vessel.own_vessel,
//         is_approved: vessel.is_approved,
//         is_active: vessel.is_active,
//         user_id: vessel.user_id,
//         created_at: vessel.created_at,
//         updated_at: vessel.updated_at,
//       }));

//       combinedData = [...combinedData, ...mappedDaratVessels];
//     }

//     // Apply search filter on combined data if search term is provided
//     if (search) {
//       combinedData = combinedData.filter(vessel => 
//         vessel.registration_number?.toLowerCase().includes(search.toLowerCase()) ||
//         vessel.vessel_no?.toLowerCase().includes(search.toLowerCase()) ||
//         vessel.zone?.toLowerCase().includes(search.toLowerCase()) ||
//         vessel.transportation?.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Apply pagination on combined data
//     const total = regularCount + daratCount;
//     const paginatedData = combinedData.slice(skip, skip + pageSize);
//     const totalPages = Math.ceil(total / pageSize);

//     return {
//       data: paginatedData,
//       total,
//       page,
//       pageSize,
//       totalPages,
//       regular_vessel_count: regularCount,
//       darat_vessel_count: daratCount,
//     };
//   }

//   private async getRegularVessels(skip: number, take: number, search?: string, is_active?: number): Promise<VesselEntity[]> {
//     const query = this.vesselRepository.createQueryBuilder('vessel');

//     if (search) {
//       query.where(
//         '(vessel.no_pendaftaran LIKE :search OR vessel.vessel_no LIKE :search OR vessel.zon LIKE :search OR vessel.zone LIKE :search)',
//         { search: `%${search}%` }
//       );
//     }

//     if (is_active !== undefined) {
//       query.andWhere('vessel.is_active = :is_active', { is_active });
//     }

//     return query
//       .skip(skip)
//       .take(take)
//       .getMany();
//   }

//   private async getRegularVesselsCount(search?: string, is_active?: number): Promise<number> {
//     const query = this.vesselRepository.createQueryBuilder('vessel');

//     if (search) {
//       query.where(
//         '(vessel.no_pendaftaran LIKE :search OR vessel.vessel_no LIKE :search OR vessel.zon LIKE :search OR vessel.zone LIKE :search)',
//         { search: `%${search}%` }
//       );
//     }

//     if (is_active !== undefined) {
//       query.andWhere('vessel.is_active = :is_active', { is_active });
//     }

//     return query.getCount();
//   }

//   private async getDaratVessels(skip: number, take: number, search?: string, is_active?: number): Promise<DaratVesselEntity[]> {
//     const query = this.daratVesselRepository.createQueryBuilder('darat_vessel');

//     if (search) {
//       query.where(
//         '(darat_vessel.registration_number LIKE :search OR darah_vessel.transportation LIKE :search)',
//         { search: `%${search}%` }
//       );
//     }

//     if (is_active !== undefined) {
//       query.andWhere('darat_vessel.is_active = :is_active', { is_active });
//     }

//     return query
//       .skip(skip)
//       .take(take)
//       .getMany();
//   }

//   private async getDaratVesselsCount(search?: string, is_active?: number): Promise<number> {
//     const query = this.daratVesselRepository.createQueryBuilder('darat_vessel');

//     if (search) {
//       query.where(
//         '(darat_vessel.registration_number LIKE :search OR darah_vessel.transportation LIKE :search)',
//         { search: `%${search}%` }
//       );
//     }

//     if (is_active !== undefined) {
//       query.andWhere('darat_vessel.is_active = :is_active', { is_active });
//     }

//     return query.getCount();
//   }

//   async getVesselStatistics(): Promise<{
//     total_vessels: number;
//     regular_vessels: number;
//     darat_vessels: number;
//     active_vessels: number;
//     inactive_vessels: number;
//   }> {
//     const [regularCount, daratCount] = await Promise.all([
//       this.vesselRepository.count(),
//       this.daratVesselRepository.count(),
//     ]);

//     const [activeRegular, activeDarat] = await Promise.all([
//       this.vesselRepository.count({ where: { is_active: true } }),
//       this.daratVesselRepository.count({ where: { is_active: 1 } }),
//     ]);

//     return {
//       total_vessels: regularCount + daratCount,
//       regular_vessels: regularCount,
//       darat_vessels: daratCount,
//       active_vessels: activeRegular + activeDarat,
//       inactive_vessels: (regularCount - activeRegular) + (daratCount - activeDarat),
//     };
//   }
// }