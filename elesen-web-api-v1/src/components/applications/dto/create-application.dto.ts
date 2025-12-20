import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  id: string;

  @IsString()
  application_type_id: string;

  @IsString()
  full_name: string;

  @IsString()
  ic_no: string;

  @IsDateString()
  date_of_birth: string;

  @IsOptional()
  @IsString()
  type_of_gender_id?: string;

  @IsOptional()
  @IsString()
  bumiputera_status?: string;

  @IsString()
  age: string;

  @IsOptional()
  @IsString()
  type_of_race_id?: string;

  @IsOptional()
  @IsString()
  marital_status_id?: string;

  @IsOptional()
  @IsString()
  no_of_children?: string;

  @IsOptional()
  @IsString()
  mail_address1?: string;

  @IsOptional()
  @IsString()
  mail_address2?: string;

  @IsOptional()
  @IsString()
  mail_address3?: string;

  @IsOptional()
  @IsString()
  mail_postcode?: string;

  @IsOptional()
  @IsString()
  mail_city?: string;

  @IsOptional()
  @IsString()
  mail_state_id?: string;

  @IsOptional()
  @IsString()
  home_address1?: string;

  @IsOptional()
  @IsString()
  home_address2?: string;

  @IsOptional()
  @IsString()
  home_address3?: string;

  @IsOptional()
  @IsString()
  home_postcode?: string;

  @IsOptional()
  @IsString()
  home_city?: string;

  @IsOptional()
  @IsString()
  home_state_id?: string;

  @IsOptional()
  @IsString()
  phone_no?: string;

  @IsOptional()
  @IsString()
  mobile_phone_no?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  type_of_residence_id?: string;

  @IsOptional()
  @IsString()
  dun_id?: string;

  @IsOptional()
  @IsString()
  parlimen_id?: string;

  @IsOptional()
  @IsNumber()
  application_amount?: number;

  @IsOptional()
  @IsString()
  application_loan_period?: string;

  @IsOptional()
  @IsString()
  bank_id?: string;

  @IsOptional()
  @IsString()
  bank_account_no?: string;
}
