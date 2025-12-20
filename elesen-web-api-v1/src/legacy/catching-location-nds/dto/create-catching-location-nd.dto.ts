import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateCatchingLocationNdDto {
  @IsString()
  catching_location_id: string;

  @IsString()
  fishing_log_id: string;

  @IsString()
  state_name: string;

  @IsString()
  district_name: string;

  @IsString()
  river_name: string;

  @IsString()
  location_name: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  updated_by?: string;

  @IsOptional()
  @IsString()
  deleted_by?: string;

  @IsBoolean()
  is_active: boolean;
}
