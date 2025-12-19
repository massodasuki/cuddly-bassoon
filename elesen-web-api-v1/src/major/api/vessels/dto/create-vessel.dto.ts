import { IsString, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class CreateVesselDto {
  @IsString()
  id: string;

  @IsString()
  entityId: string;

  @IsString()
  vesselNo: string;

  @IsString()
  zone: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  createdBy?: string;
}
