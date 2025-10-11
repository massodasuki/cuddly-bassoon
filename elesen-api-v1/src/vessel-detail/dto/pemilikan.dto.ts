import { ApiProperty } from '@nestjs/swagger';

export class PemilikanDto {
  @ApiProperty()
  namaPemilik: string;

  @ApiProperty()
  noKadPengenalan: string;

  @ApiProperty()
  jenisPemilikan: string;

  @ApiProperty()
  district: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  tarikhPemilikan: string;

  @ApiProperty()
  status: string;
}