import { IsOptional, IsString, IsNumber, IsDateString, IsArray } from 'class-validator';

export class CreateLpiFormDto {
  @IsOptional()
  @IsArray()
  engines?: any[]; // Array of engine data

  @IsOptional()
  @IsArray()
  equipmentItems?: any[];

  @IsOptional()
  equipments?: any;

  @IsOptional()
  fishingEquipments?: any;

  @IsOptional()
  fishingGears?: any;

  @IsOptional()
  @IsArray()
  inlandFishingEquipmentItems?: any[];

  @IsOptional()
  inlandFishingEquipments?: any;

  @IsOptional()
  inspectionDetails?: any;

  @IsOptional()
  @IsArray()
  inspectionItems?: any[];

  @IsOptional()
  inspections?: any;

  @IsOptional()
  navigations?: any;

  @IsOptional()
  safetyEquipments?: any;

  @IsOptional()
  sailingEquipments?: any;

  @IsOptional()
  vessels?: any;
}