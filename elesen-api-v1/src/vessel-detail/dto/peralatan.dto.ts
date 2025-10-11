import { ApiProperty } from '@nestjs/swagger';

export class PeralatanDto {
  @ApiProperty()
  nama: string;

  @ApiProperty()
  jenisPeralatan: string;

  @ApiProperty()
  panjangMeter: number;

  @ApiProperty()
  tarikhDilesen: string;

  @ApiProperty()
  status: string;
}