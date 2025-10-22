import { ApiProperty } from '@nestjs/swagger';

export class KesalahanDto {
  @ApiProperty()
  nama: string;

  @ApiProperty()
  noKadPengenalan: string;

  @ApiProperty()
  akta: string;

  @ApiProperty()
  seksyen: string;

  @ApiProperty()
  kesalahan: string;

  @ApiProperty()
  tarikh: string;

  @ApiProperty()
  keputusan: string;
}