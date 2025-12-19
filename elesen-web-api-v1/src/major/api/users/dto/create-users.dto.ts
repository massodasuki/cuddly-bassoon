import { IsOptional, IsString, IsNotEmpty, IsEmail, IsDateString, IsNumber } from 'class-validator';

export class CreateUsersDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsDateString()
  email_verified_at?: Date;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  remember_token?: string;

  @IsNotEmpty()
  @IsNumber()
  is_active: number;

  @IsNotEmpty()
  @IsNumber()
  is_admin: number;

  @IsOptional()
  @IsNumber()
  user_type?: number;

  @IsOptional()
  @IsString()
  profile_picture?: string;

  @IsOptional()
  @IsDateString()
  last_online_at?: Date;

  @IsOptional()
  @IsNumber()
  bumiputera_type?: number;

  @IsOptional()
  @IsString()
  address1?: string;

  @IsOptional()
  @IsString()
  address2?: string;

  @IsOptional()
  @IsString()
  address3?: string;

  @IsOptional()
  @IsString()
  postcode?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  state_id?: string;

  @IsOptional()
  @IsString()
  contact_number?: string;

  @IsOptional()
  @IsString()
  mobile_contact_number?: string;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  updated_by?: string;

  @IsOptional()
  @IsString()
  deleted_by?: string;

  @IsOptional()
  @IsDateString()
  created_at?: Date;

  @IsOptional()
  @IsDateString()
  updated_at?: Date;

  @IsOptional()
  @IsDateString()
  deleted_at?: Date;

  @IsOptional()
  @IsString()
  entity_id?: string;

  @IsOptional()
  @IsString()
  position_id?: string;

  @IsOptional()
  @IsDateString()
  start_date?: Date;

  @IsOptional()
  @IsDateString()
  end_date?: Date;

  @IsOptional()
  @IsNumber()
  watikah_status?: number;

  @IsOptional()
  @IsNumber()
  is_first_login?: number;
}