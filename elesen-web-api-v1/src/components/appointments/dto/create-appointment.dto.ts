import { IsString, IsOptional, IsDateString, IsInt } from 'class-validator';

export class CreateAppointmentDto {
  @IsOptional()
  @IsString()
  user_id?: string;

  @IsString()
  username: string;

  @IsString()
  name: string;

  @IsString()
  icno: string;

  @IsString()
  level: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsString()
  office_duty: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsDateString()
  report_date: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsString()
  ic_file_path: string;

  @IsString()
  ic_file_name: string;

  @IsString()
  letter_file_path: string;

  @IsString()
  letter_file_name: string;

  @IsDateString()
  inactive_date: string;

  @IsOptional()
  @IsString()
  inactive_note?: string;

  @IsOptional()
  @IsString()
  inactive_file_path?: string;

  @IsOptional()
  @IsString()
  inactive_file_name?: string;

  @IsInt()
  status_id: number;

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