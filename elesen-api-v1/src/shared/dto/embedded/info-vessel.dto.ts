import { IsString, IsDateString } from 'class-validator';

export class InfoVesselDto {
  @IsString() struktur: string;
  @IsString() jenis: string;
  @IsString() jenisKulit: string;
  @IsDateString() tarikhPemeriksaan: string;
}
