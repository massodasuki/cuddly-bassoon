import { ApiProperty } from '@nestjs/swagger';

export class KruDto {
  @ApiProperty()
  noKadPendaftaran: string;

  @ApiProperty()
  nama: string;

  @ApiProperty()
  negara: string;

  @ApiProperty()
  noKadPengenalan: string;

  @ApiProperty()
  jawatan: string;
}