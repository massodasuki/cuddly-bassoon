import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsDateString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 255)
  name: string;

  @IsString()
  @Length(1, 100)
  username: string;

  @IsEmail()
  @Length(1, 255)
  email: string;

  @IsOptional()
  @IsDateString()
  email_verified_at?: Date;

  @IsString()
  @Length(6, 255)
  password: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  remember_token?: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsOptional()
  @IsBoolean()
  is_admin?: boolean;

  @IsString()
  user_type: string;

  @IsOptional()
  @IsString()
  profile_picture?: string;

  @IsOptional()
  @IsDateString()
  last_online_at?: Date;

  @IsOptional()
  @IsString()
  bumiputera_type?: string;

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
  @IsUUID()
  state_id?: string;

  @IsOptional()
  @IsString()
  contact_number?: string;

  @IsOptional()
  @IsString()
  mobile_contact_number?: string;

  @IsOptional()
  @IsUUID()
  created_by?: string;

  @IsOptional()
  @IsUUID()
  updated_by?: string;

  @IsOptional()
  @IsUUID()
  deleted_by?: string;

  @IsOptional()
  @IsUUID()
  entity_id?: string;

  @IsOptional()
  @IsUUID()
  position_id?: string;

  @IsOptional()
  @IsDateString()
  start_date?: Date;

  @IsOptional()
  @IsDateString()
  end_date?: Date;

  @IsOptional()
  @IsString()
  watikah_status?: string;
}
