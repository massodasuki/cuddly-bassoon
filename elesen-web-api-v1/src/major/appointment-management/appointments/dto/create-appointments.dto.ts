import { IsNotEmpty, IsString, IsOptional, IsDateString, IsInt } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  user_id?: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icno: string;

  @IsString()
  @IsNotEmpty()
  level: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsString()
  @IsNotEmpty()
  office_duty: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  department?: string;

  @IsDateString()
  @IsNotEmpty()
  report_date: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  district?: string;

  @IsString()
  @IsNotEmpty()
  ic_file_path: string;

  @IsString()
  @IsNotEmpty()
  ic_file_name: string;

  @IsString()
  @IsNotEmpty()
  letter_file_path: string;

  @IsString()
  @IsNotEmpty()
  letter_file_name: string;

  @IsDateString()
  @IsNotEmpty()
  inactive_date: string;

  @IsString()
  @IsOptional()
  inactive_note?: string;

  @IsString()
  @IsOptional()
  inactive_file_path?: string;

  @IsString()
  @IsOptional()
  inactive_file_name?: string;

  @IsInt()
  @IsNotEmpty()
  status_id: number;

  @IsString()
  @IsOptional()
  created_by?: string;

  @IsString()
  @IsOptional()
  updated_by?: string;

  @IsString()
  @IsOptional()
  deleted_by?: string;
}