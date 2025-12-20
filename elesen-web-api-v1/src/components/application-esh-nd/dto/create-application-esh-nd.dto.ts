import { IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';

export class CreateApplicationEshNdDto {
  @IsString()
  id: string;

  @IsString()
  user_id: string;

  @IsOptional()
  @IsString()
  bank_name?: string;

  @IsOptional()
  @IsString()
  bank_account_no?: string;

  @IsOptional()
  @IsString()
  bank_branch?: string;

  @IsOptional()
  @IsNumber()
  income_fishing?: number;

  @IsOptional()
  @IsNumber()
  income_other?: number;

  @IsOptional()
  @IsNumber()
  children_count?: number;

  @IsOptional()
  @IsNumber()
  other_dependents?: number;

  @IsOptional()
  @IsEnum(['none', 'primary', 'secondary', 'tertiary'])
  education_level?: 'none' | 'primary' | 'secondary' | 'tertiary';

  @IsOptional()
  @IsNumber()
  agreement?: number;
}
