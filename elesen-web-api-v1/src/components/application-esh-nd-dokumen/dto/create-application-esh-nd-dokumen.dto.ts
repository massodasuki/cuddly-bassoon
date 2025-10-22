import { IsString, IsOptional, IsEnum } from 'class-validator';

export class CreateApplicationEshNdDokumenDto {
  @IsString()
  id: string;

  @IsString()
  application_esh_nd_id: string;

  @IsEnum(['bank', 'kwsp', 'aadk', 'support'])
  file_type: 'bank' | 'kwsp' | 'aadk' | 'support';

  @IsOptional()
  @IsString()
  file_desc?: string;

  @IsString()
  file_name: string;

  @IsString()
  file_path: string;
}