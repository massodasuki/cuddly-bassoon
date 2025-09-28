import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePengkalanDto {
  @ApiProperty({ description: 'User ID', example: 'uuid-string' })
  @IsString()
  user_id: string;

  @ApiProperty({ description: 'Name', example: 'Pengkalan ABC', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'District', example: 'District A', required: false })
  @IsOptional()
  @IsString()
  district?: string;

  @ApiProperty({ description: 'State', example: 'State B', required: false })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({ description: 'Location', example: 'Location details', required: false })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ description: 'License number', example: 'LIC12345', required: false })
  @IsOptional()
  @IsString()
  license_no?: string;

  @ApiProperty({ description: 'License expiry date', example: '2025-12-31', required: false })
  @IsOptional()
  @IsDateString()
  license_expiry?: string;

  @ApiProperty({ description: 'Main equipment', example: 'Net A', required: false })
  @IsOptional()
  @IsString()
  main_equipment?: string;

  @ApiProperty({ description: 'Additional equipment', example: 'Boat B', required: false })
  @IsOptional()
  @IsString()
  additional_equipment?: string;
}