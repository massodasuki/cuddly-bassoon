import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { KehadiranEnum, DihadiriOlehEnum, StatusEnum } from '../appointments-inspections.entity';

export class WakilDto {
  @ApiPropertyOptional({ example: 'Ahmad bin Ali' })
  @IsOptional()
  @IsString()
  nama?: string;

  @ApiPropertyOptional({ example: '901212-10-1234' })
  @IsOptional()
  @IsString()
  noKadPengenalan?: string;
}

export class CreateAppointmentsInspectionsDto {
  @ApiPropertyOptional({ example: 'uuid-string-here' })
  @IsOptional()
  @IsString()
  applicationsId?: string;

  @ApiProperty({ example: 'TRF1234' })
  @IsNotEmpty()
  @IsString()
  noVessel: string;

  @ApiProperty({ enum: KehadiranEnum, example: 'HADIR' })
  @IsEnum(KehadiranEnum)
  kehadiran: KehadiranEnum;

  @ApiPropertyOptional({ enum: DihadiriOlehEnum, example: 'PEMOHON' })
  @IsOptional()
  @IsEnum(DihadiriOlehEnum)
  dihadiriOleh?: DihadiriOlehEnum;

  @ApiPropertyOptional({ type: WakilDto, example: {"nama":"Ahmad bin Ali","noKadPengenalan":"901212-10-1234"} })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => WakilDto)
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return value;
  })
  wakil?: WakilDto;

  @ApiPropertyOptional({ example: 'Cuaca tidak mengizinkan.' })
  @IsOptional()
  @IsString()
  ulasan?: string;

  @ApiPropertyOptional({ enum: StatusEnum, example: 'SELESAI' })
  @IsOptional()
  @IsEnum(StatusEnum)
  status?: StatusEnum;

  @ApiPropertyOptional({ example: '2025-10-25T00:00:00Z' })
  @IsOptional()
  @IsString()
  timestamp?: string;

  @ApiPropertyOptional({ example: 'uuid-string-here' })
  @IsOptional()
  @IsString()
  createdBy?: string;

  @ApiPropertyOptional({ example: '/path/to/your/file.jpg' })
  @IsOptional()
  @IsString()
  suratWakil?: string;
}
