import { ApiProperty } from '@nestjs/swagger';

export class GambarEnjinDto {
  @ApiProperty()
  enjinUrl: string;

  @ApiProperty()
  noEnjinUrl: string;

  @ApiProperty()
  penandaEnjinUrl: string;

  @ApiProperty()
  turboUrl: string;

  @ApiProperty()
  generatorUrl: string;
}