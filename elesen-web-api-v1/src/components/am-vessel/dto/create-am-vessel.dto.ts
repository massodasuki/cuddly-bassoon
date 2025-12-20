import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateAmVesselDto {
  @IsOptional()
  @IsString()
  no_pendaftaran?: string;

  @IsOptional()
  @IsString()
  no_tetap?: string;

  @IsOptional()
  @IsString()
  no_patil_kekal?: string;

  @IsDateString()
  tarikh_daftar: string;

  @IsString()
  indikator_kapal: string;

  @IsString()
  bahan_api: string;

  @IsOptional()
  @IsString()
  status_usaha_kapal?: string;

  @IsString()
  tempasal_kapal: string;

  @IsOptional()
  @IsString()
  negara?: string;

  @IsNumber()
  kebenaran_memancing: number;

  @IsNumber()
  pemasangan_vtu: number;

  @IsOptional()
  @IsString()
  kod_rfid?: string;

  @IsOptional()
  @IsString()
  kod_qr?: string;

  @IsString()
  hak_milik: string;

  @IsNumber()
  status_iuu: number;

  @IsString()
  pangkalan_utama: string;

  @IsOptional()
  @IsString()
  pangkalan_tambahan?: string;
}
