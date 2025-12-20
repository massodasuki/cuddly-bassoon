import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateAppointmentApproveDto {
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  file_title?: string;

  @IsOptional()
  @IsString()
  file_path?: string;

  @IsOptional()
  @IsString()
  file_name?: string;

  @IsOptional()
  @IsString()
  watikah_cert?: string;

  @IsOptional()
  @IsString()
  cert_no?: string;

  @IsDateString()
  approval_date: string;

  @IsString()
  approval_status: string;

  @IsOptional()
  @IsString()
  approval_notes?: string;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  updated_by?: string;
}
