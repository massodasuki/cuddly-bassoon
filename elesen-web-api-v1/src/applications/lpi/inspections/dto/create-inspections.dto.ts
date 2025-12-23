import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';

export class CreateInspectionsDto {
  @IsOptional()
  @IsString()
  inspection_id?: string;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsEnum(['land', 'marine'])
  fishery_type?: string;

  @IsOptional()
  @IsString()
  owner_health?: string;

  @IsOptional()
  @IsString()
  vessel_condition?: string;

  @IsOptional()
  @IsString()
  vessel_originality?: string;

  @IsOptional()
  @IsString()
  hull_type?: string;

  @IsOptional()
  @IsString()
  vessel_type?: string;

  @IsOptional()
  @IsDateString()
  inspection_date?: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  attandane_form?: string;

  @IsOptional()
  @IsString()
  vessel_picture?: string;

  @IsOptional()
  @IsString()
  owner_inspector_picture?: string;

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