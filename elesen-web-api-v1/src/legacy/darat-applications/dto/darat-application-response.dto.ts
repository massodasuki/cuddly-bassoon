import { ApiProperty } from '@nestjs/swagger';

export class DaratApplicationItemDto {
  @ApiProperty()
  noVesel: string;

  @ApiProperty()
  tarikhPemeriksaan: string;

  @ApiProperty()
  zonOperasi: string;

  @ApiProperty()
  penyediaanLaporan: string;
}

export class DaratApplicationResponseDto {
  @ApiProperty({ type: [DaratApplicationItemDto] })
  data: DaratApplicationItemDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  totalPages: number;
}
