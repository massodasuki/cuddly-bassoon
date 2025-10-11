import { ApiProperty } from '@nestjs/swagger';

export class BorangPermohonanItemDto {
  @ApiProperty({ description: 'Vessel number' })
  noVesel: string;

  @ApiProperty({ description: 'Inspection date in DD-MM-YYYY format' })
  tarikhPemeriksaan: string;

  @ApiProperty({ description: 'Operation zone' })
  zonOperasi: string;

  @ApiProperty({ description: 'Report preparation status' })
  penyediaanLaporan: string;
}

export class BorangPermohonanResponseDto {
  @ApiProperty({ type: [BorangPermohonanItemDto], description: 'List of borang permohonan items' })
  data: BorangPermohonanItemDto[];

  @ApiProperty({ description: 'Total number of records' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of items per page' })
  pageSize: number;

  @ApiProperty({ description: 'Total number of pages' })
  totalPages: number;
}