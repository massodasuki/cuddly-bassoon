import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BorangPermohonan } from './entities/borang-permohonan.entity';
import { BorangPermohonanResponseDto, BorangPermohonanItemDto } from './dto/borang-permohonan-response.dto';

@Injectable()
export class BorangPermohonanService {
  constructor(
    @InjectRepository(BorangPermohonan)
    private borangPermohonanRepository: Repository<BorangPermohonan>,
  ) {}

  async getBorangPermohonan(page: number = 1, pageSize: number = 5): Promise<BorangPermohonanResponseDto> {
    const [data, total] = await this.borangPermohonanRepository.findAndCount({
      order: { tarikhPemeriksaan: 'ASC' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    const items: BorangPermohonanItemDto[] = data.map(item => ({
      noVesel: item.noVesel,
      tarikhPemeriksaan: item.tarikhPemeriksaan.toISOString().split('T')[0].split('-').reverse().join('-'), // DD-MM-YYYY
      zonOperasi: item.zonOperasi,
      penyediaanLaporan: item.penyediaanLaporan,
    }));

    const totalPages = Math.ceil(total / pageSize);

    return {
      data: items,
      total,
      page,
      pageSize,
      totalPages,
    };
  }
}