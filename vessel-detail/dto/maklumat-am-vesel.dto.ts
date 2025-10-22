import { ApiProperty } from '@nestjs/swagger';

export class MaklumatAmVeselDto {
  @ApiProperty()
  noPendaftaranVesel: string;

  @ApiProperty({ nullable: true })
  noGeran: string | null;

  @ApiProperty()
  noPatilKekal: string;

  @ApiProperty()
  tarikhDaftar: string;

  @ApiProperty()
  lokasiPembinaanVesel: string;

  @ApiProperty()
  negaraAsal: string;

  @ApiProperty()
  pemasanganMTU: boolean;

  @ApiProperty({ nullable: true })
  noPendaftaranMTU: string | null;

  @ApiProperty()
  hakMilik: string;

  @ApiProperty()
  kodRFIDQR: string;

  @ApiProperty()
  pengkalanUtama: boolean;

  @ApiProperty()
  pelabuhanUtama: string;

  @ApiProperty()
  pelabuhanTambahan: string;
}