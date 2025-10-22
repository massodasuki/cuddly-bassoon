import { ApiProperty } from '@nestjs/swagger';

export class PendaftaranAntarabangsaDto {
  @ApiProperty({ nullable: true })
  namaVesel: string | null;

  @ApiProperty()
  noPendaftaran: string;

  @ApiProperty()
  noIRCS: string;

  @ApiProperty()
  noIMO: string;

  @ApiProperty()
  zonPenangkapan: string;

  @ApiProperty()
  spesisSasaran: string;
}