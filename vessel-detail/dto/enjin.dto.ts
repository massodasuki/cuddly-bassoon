import { ApiProperty } from '@nestjs/swagger';
import { MaklumatAmEnjinDto } from './maklumat-am-enjin.dto';
import { GambarEnjinDto } from './gambar-enjin.dto';

export class EnjinDto {
  @ApiProperty()
  maklumatAmEnjin: MaklumatAmEnjinDto;

  @ApiProperty()
  gambar: GambarEnjinDto;
}