import { IsString, IsNumber, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class CreateCmEquipmentDto {
  @IsString()
  id: string;

  @IsString()
  vessel_id: string;

  @IsString()
  equipment_name: string;

  @IsNumber()
  equipment_type: number;

  @IsOptional()
  @IsDateString()
  date_licensed?: string;

  @IsNumber()
  fisherman_type: number;

  @IsOptional()
  @IsString()
  entity_id?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  notes?: string;

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
