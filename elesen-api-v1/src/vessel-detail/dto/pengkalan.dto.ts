import { ApiProperty } from '@nestjs/swagger';

export class PengkalanDto {
  @ApiProperty()
  noRujukanPengkalan: string;

  @ApiProperty()
  namaPengkalan: string;

  @ApiProperty()
  jenisPengkalan: string;

  @ApiProperty()
  district: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  tahunMula: string;

  @ApiProperty()
  status: string;
}