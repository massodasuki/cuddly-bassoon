import { ApiProperty } from '@nestjs/swagger';

export class KulitDto {
  @ApiProperty()
  tarikhDilesen: string;

  @ApiProperty()
  panjangMeter: number;

  @ApiProperty()
  lebarMeter: number;

  @ApiProperty()
  kedalamanMeter: number;

  @ApiProperty()
  muatanGRT: number;

  @ApiProperty()
  status: string;

  @ApiProperty({ nullable: true })
  tindakan: string | null;
}