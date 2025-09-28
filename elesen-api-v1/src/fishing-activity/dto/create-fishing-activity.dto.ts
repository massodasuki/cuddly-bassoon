import { IsNumber, IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFishingActivityDto {
  @ApiProperty({ description: 'User ID', example: 'uuid-string' })
  @IsString()
  user_id: string;

  @ApiProperty({ description: 'Is main income', example: false, required: false })
  @IsOptional()
  @IsBoolean()
  is_main_income?: boolean;

  @ApiProperty({ description: 'Fishing location', example: 'Location A', required: false })
  @IsOptional()
  @IsString()
  fishing_location?: string;

  @ApiProperty({ description: 'First registered year', example: 2020, required: false })
  @IsOptional()
  @IsNumber()
  first_registered_year?: number;

  @ApiProperty({ description: 'Fishing days per month', example: 20, required: false })
  @IsOptional()
  @IsNumber()
  fishing_days_per_month?: number;

  @ApiProperty({ description: 'Fishing days per season', example: 100, required: false })
  @IsOptional()
  @IsNumber()
  fishing_days_per_season?: number;

  @ApiProperty({ description: 'Season length', example: 6, required: false })
  @IsOptional()
  @IsNumber()
  season_length?: number;

  @ApiProperty({ description: 'Annual income estimate', example: 50000.00, required: false })
  @IsOptional()
  @IsNumber()
  annual_income_estimate?: number;

  @ApiProperty({ description: 'Monthly income estimate', example: 4166.67, required: false })
  @IsOptional()
  @IsNumber()
  monthly_income_estimate?: number;
}