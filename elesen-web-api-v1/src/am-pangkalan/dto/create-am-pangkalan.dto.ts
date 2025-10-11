import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';

export class CreateAmPangkalanDto {
  @IsOptional()
  @IsString()
  no_rujukan_permohonan?: string;

  @IsString()
  nama_pangkalan: string;

  @IsEnum(['Utama', 'Tambahan'])
  jenis_pangkalan: 'Utama' | 'Tambahan';

  @IsString()
  daerah: string;

  @IsString()
  negeri: string;

  @IsOptional()
  @IsDateString()
  tarikh_mula_beroperasi?: string;

  @IsOptional()
  @IsEnum(['Aktif', 'Tidak Aktif'])
  status?: 'Aktif' | 'Tidak Aktif';
}