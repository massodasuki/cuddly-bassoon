import { ApiProperty } from '@nestjs/swagger';
import { ProfilVeselDto } from './profil-vesel.dto';

export class VesselDetailResponseDto {
  @ApiProperty({ example: [] })
  data: ProfilVeselDto[];
}