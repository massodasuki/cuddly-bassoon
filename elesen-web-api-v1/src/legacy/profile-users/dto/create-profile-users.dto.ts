import { IsNotEmpty, IsOptional, IsString, IsNumber, IsEmail, IsDateString } from 'class-validator';

export class CreateProfileUserDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  icno: string;

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
  @IsNumber()
  poskod?: number;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  parliament?: string;

  @IsOptional()
  @IsString()
  parliament_seat?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsNotEmpty()
  @IsString()
  user_type: string;

  @IsNotEmpty()
  @IsString()
  no_phone: string;

  @IsOptional()
  @IsString()
  no_phone_office?: string;

  @IsOptional()
  @IsString()
  religion?: string;

  @IsOptional()
  @IsString()
  race?: string;

  @IsOptional()
  @IsString()
  wedding_status?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  salinan_ic?: string;

  @IsOptional()
  @IsString()
  no_vesel?: string;

  @IsOptional()
  @IsString()
  document?: string;

  @IsNotEmpty()
  @IsNumber()
  is_active: number;

  @IsOptional()
  @IsNumber()
  oku_status?: number;

  @IsOptional()
  @IsNumber()
  bumiputera_status?: number;

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
  @IsDateString()
  verified_at?: Date;

  @IsOptional()
  @IsNumber()
  verify_status?: number;

  @IsNotEmpty()
  @IsNumber()
  verification_modal_shown: number;

  @IsOptional()
  @IsString()
  ulasan?: string;

  @IsOptional()
  @IsString()
  type_id?: string;

  @IsOptional()
  @IsString()
  ref?: string;

  @IsOptional()
  @IsString()
  phone_code?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  phone_office_code?: string;

  @IsOptional()
  @IsString()
  phone_office?: string;

  @IsOptional()
  @IsString()
  gender_id?: string;

  @IsOptional()
  @IsString()
  religion_id?: string;

  @IsOptional()
  @IsString()
  race_id?: string;

  @IsOptional()
  @IsString()
  marital_status_id?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  is_bumiputera?: number;

  @IsNotEmpty()
  @IsNumber()
  is_active_ajim: number;

  @IsOptional()
  @IsString()
  secondary_phone_number?: string;

  @IsOptional()
  @IsString()
  secondary_address_1?: string;

  @IsOptional()
  @IsString()
  secondary_address_2?: string;

  @IsOptional()
  @IsString()
  secondary_address_3?: string;

  @IsOptional()
  @IsString()
  secondary_postcode?: string;

  @IsOptional()
  @IsString()
  secondary_district?: string;

  @IsOptional()
  @IsString()
  secondary_state?: string;
}
