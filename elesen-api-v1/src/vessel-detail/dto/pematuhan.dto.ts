import { ApiProperty } from '@nestjs/swagger';

export class PematuhanDto {
  @ApiProperty()
  maklumatVesel: any; // Simplified for now

  @ApiProperty()
  enjin: any; // Simplified for now

  @ApiProperty()
  peralatanPelayaran: any; // Simplified for now

  @ApiProperty()
  peralatanKeselamatan: any; // Simplified for now

  @ApiProperty()
  kelengkapanMenangkapIkan: any; // Simplified for now

  @ApiProperty()
  dokumen: any; // Simplified for now
}