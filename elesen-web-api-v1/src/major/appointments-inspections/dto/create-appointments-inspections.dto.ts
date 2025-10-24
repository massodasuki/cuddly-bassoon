import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';
import { KehadiranEnum, DihadiriOlehEnum, StatusEnum } from '../appointments-inspections.entity';

export class WakilDto {
  @ApiPropertyOptional({ example: 'Ahmad bin Ali' })
  @IsOptional()
  @IsString()
  nama?: string;

  @ApiPropertyOptional({ example: '901212-10-1234' })
  @IsOptional()
  @IsString()
  no_ic?: string;

  @ApiPropertyOptional({
    description: 'Base64 string or file reference (max 5MB)',
    example: 'base64encodedimage==',
  })
  @IsOptional()
  @IsString()
  surat_wakil?: string;
}

export class CreateAppointmentsInspectionsDto {
  @ApiProperty({ example: 'TRF1234' })
  @IsNotEmpty()
  @IsString()
  no_vessel: string;

  @ApiProperty({ enum: KehadiranEnum })
  @IsEnum(KehadiranEnum)
  kehadiran: KehadiranEnum;

  @ApiPropertyOptional({ enum: DihadiriOlehEnum })
  @IsOptional()
  @IsEnum(DihadiriOlehEnum)
  dihadiri_oleh?: DihadiriOlehEnum;

  @ApiPropertyOptional({ type: WakilDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => WakilDto)
  wakil?: WakilDto;

  @ApiPropertyOptional({ example: 'Cuaca tidak mengizinkan.' })
  @IsOptional()
  @IsString()
  ulasan?: string;

  @ApiPropertyOptional({ enum: StatusEnum })
  @IsOptional()
  @IsEnum(StatusEnum)
  status?: StatusEnum;

  @ApiPropertyOptional({ example: '2025-10-25T00:00:00Z' })
  @IsOptional()
  @IsString()
  timestamp?: string;

  @ApiPropertyOptional({ example: 'uuid-string' })
  @IsOptional()
  @IsString()
  created_by?: string;
}