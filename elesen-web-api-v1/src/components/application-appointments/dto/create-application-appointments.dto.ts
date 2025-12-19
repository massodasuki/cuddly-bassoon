import { IsString, IsOptional, IsInt, IsDateString, IsDate } from 'class-validator';

export class CreateApplicationAppointmentDto {
  @IsString()
  application_id: string;

  @IsDate()
  appointment_date: Date;

  @IsOptional()
  @IsString()
  appointment_time?: string;

  @IsOptional()
  @IsString()
  appointment_type?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  officer_id?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsInt()
  is_deleted?: number;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  updated_by?: string;

  @IsOptional()
  @IsDateString()
  created_at?: string;

  @IsOptional()
  @IsDateString()
  updated_at?: string;
}