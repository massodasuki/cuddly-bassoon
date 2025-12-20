import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateAuditLogDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  table_id?: string;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsString()
  action?: string;

  @IsOptional()
  details?: any;

  @IsOptional()
  @IsString()
  exception?: string;

  @IsOptional()
  @IsString()
  ip_address?: string;

  @IsOptional()
  @IsString()
  browser?: string;

  @IsOptional()
  @IsString()
  browser_family?: string;

  @IsOptional()
  @IsString()
  browser_version?: string;

  @IsOptional()
  @IsString()
  browser_engine?: string;

  @IsOptional()
  @IsString()
  platform?: string;

  @IsOptional()
  @IsString()
  platform_family?: string;

  @IsOptional()
  @IsString()
  platform_version?: string;

  @IsOptional()
  @IsString()
  device_type?: string;

  @IsOptional()
  @IsString()
  device_family?: string;

  @IsOptional()
  @IsString()
  device_model?: string;

  @IsOptional()
  @IsString()
  mobile_grade?: string;

  @IsNumber()
  is_bot: number;

  @IsNumber()
  is_in_app: number;

  @IsOptional()
  @IsString()
  created_by?: string;
}
