import { IsOptional, IsString, IsNumber, IsBoolean, IsDateString } from 'class-validator';

export class CreateVesselsDto {
  @IsOptional()
  @IsString()
  vesselNo?: string;

  @IsOptional()
  @IsString()
  noPendaftaran?: string;

  @IsOptional()
  @IsNumber()
  grt?: number;

  @IsOptional()
  @IsString()
  kategoriVessel?: string;

  @IsOptional()
  @IsString()
  zon?: string;

  @IsOptional()
  @IsString()
  negeri?: string;

  @IsOptional()
  @IsString()
  daerah?: string;

  @IsOptional()
  @IsString()
  pangkalan?: string;

  @IsOptional()
  @IsNumber()
  bilEnjin?: number;

  @IsOptional()
  @IsDateString()
  licenseStart?: string;

  @IsOptional()
  @IsDateString()
  licenseEnd?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsOptional()
  @IsNumber()
  entityId?: number;
}