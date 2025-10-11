import { ApiProperty } from '@nestjs/swagger';

export class MaklumatAmEnjinDto {
  @ApiProperty()
  jenisEnjin: string;

  @ApiProperty()
  bahanApi: string;

  @ApiProperty()
  jenamaEnjin: string;

  @ApiProperty()
  kuasaKuda: number;

  @ApiProperty()
  noEnjin: string;

  @ApiProperty()
  model: string;

  @ApiProperty({ nullable: true })
  turbo: string | null;

  @ApiProperty()
  tarikhPEV: string;

  @ApiProperty()
  kategoriEnjin: string;

  @ApiProperty()
  status: string;
}