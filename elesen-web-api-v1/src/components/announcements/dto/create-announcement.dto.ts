import { IsString, IsOptional, IsDateString, IsInt } from 'class-validator';

export class CreateAnnouncementDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  start_date: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsOptional()
  @IsString()
  file_title?: string;

  @IsOptional()
  @IsString()
  file_path?: string;

  @IsOptional()
  @IsString()
  file_name?: string;

  @IsInt()
  announcement_type: number;

  @IsInt()
  announcement_status: number;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  updated_by?: string;

  @IsOptional()
  @IsString()
  deleted_by?: string;
}
