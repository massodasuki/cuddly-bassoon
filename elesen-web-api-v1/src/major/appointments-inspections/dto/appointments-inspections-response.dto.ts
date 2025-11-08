import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { KehadiranEnum, DihadiriOlehEnum, StatusEnum } from '../appointments-inspections.entity';

export class WakilResponseDto {
  @ApiPropertyOptional({ example: 'Ahmad bin Ali' })
  @Expose()
  nama?: string;

  @ApiPropertyOptional({ example: '901212-10-1234' })
  @Expose()
  noIc?: string;
}

export class AppointmentsInspectionsResponseDto {
  @ApiProperty({ example: 'uuid-string-here' })
  @Expose()
  id: string;

  @ApiPropertyOptional({ example: 'uuid-string-here' })
  @Expose()
  applicationsId?: string;

  @ApiProperty({ example: 'TRF1234' })
  @Expose()
  noVessel: string;

  @ApiProperty({ enum: KehadiranEnum, example: 'Hadir' })
  @Expose()
  kehadiran: KehadiranEnum;

  @ApiPropertyOptional({ enum: DihadiriOlehEnum, example: 'Pemilik' })
  @Expose()
  dihadiriOleh?: DihadiriOlehEnum;

  @ApiPropertyOptional({ type: WakilResponseDto })
  @Expose()
  @Transform(({ obj }) => ({
    nama: obj.wakil_nama,
    noIc: obj.wakil_no_ic,
  }), { toClassOnly: true })
  wakil?: WakilResponseDto;

  @ApiPropertyOptional({ example: '/path/to/your/file.jpg' })
  @Expose()
  suratWakil?: string;

  @ApiPropertyOptional({ example: 'Cuaca tidak mengizinkan.' })
  @Expose()
  ulasan?: string;

  @ApiPropertyOptional({ enum: StatusEnum, example: 'submitted' })
  @Expose()
  status?: StatusEnum;

  @ApiPropertyOptional({ example: '2025-10-25T00:00:00.000Z' })
  @Expose()
  @Transform(({ value }) => value?.toISOString(), { toClassOnly: true })
  timestamp?: string;

  @ApiPropertyOptional({ example: 'uuid-string-here' })
  @Expose()
  createdBy?: string;

  @ApiPropertyOptional({ example: '2025-10-25T00:00:00.000Z' })
  @Expose()
  @Transform(({ value }) => value?.toISOString(), { toClassOnly: true })
  createdAt?: string;

  @ApiPropertyOptional({ example: '2025-10-25T00:00:00.000Z' })
  @Expose()
  @Transform(({ value }) => value?.toISOString(), { toClassOnly: true })
  updatedAt?: string;

  @ApiPropertyOptional({ example: '2025-10-25T00:00:00.000Z' })
  @Expose()
  @Transform(({ value }) => value?.toISOString(), { toClassOnly: true })
  deletedAt?: string;
}