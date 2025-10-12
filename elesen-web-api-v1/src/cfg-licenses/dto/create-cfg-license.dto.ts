import { IsString, IsNumber, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class CreateCfgLicenseDto {
  @IsString()
  id: string;

  @IsString()
  license_parameter: string;

  @IsString()
  desc: string;

  @IsNumber()
  license_duration: number;

  @IsOptional()
  @IsNumber()
  license_amount?: number;

  @IsDateString()
  start_date: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsBoolean()
  is_active: boolean;

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