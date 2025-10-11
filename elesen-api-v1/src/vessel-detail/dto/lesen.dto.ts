import { ApiProperty } from '@nestjs/swagger';

export class LesenDto {
  @ApiProperty()
  noLesen: string;

  @ApiProperty()
  tarikhMula: string;

  @ApiProperty()
  tarikhTamat: string;

  @ApiProperty()
  zon: string;

  @ApiProperty()
  noPatil: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  statusIUUU: string;
}