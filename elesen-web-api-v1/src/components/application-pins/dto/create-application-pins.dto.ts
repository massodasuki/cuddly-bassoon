import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class CreateApplicationPinDto {
  @IsString()
  application_id: string;

  @IsString()
  pin_code: string;

  @IsOptional()
  @IsString()
  pin_type?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  is_active?: number;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  updated_by?: string;

  @IsOptional()
  @IsDateString()
  created_at?: string;

  @IsOptional()
  @IsDateString()
  updated_at?: string;
}