import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateCodeMasterDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  parent_id?: string;

  @IsOptional()
  @IsString()
  parent_name?: string;

  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  name_ms?: string;

  @IsOptional()
  @IsNumber()
  order?: number;

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