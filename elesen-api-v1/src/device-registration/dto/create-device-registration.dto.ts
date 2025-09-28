
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDeviceRegistrationDto {
  @IsString()
  @IsNotEmpty()
  fcm_token: string;

  @IsOptional()
  @IsString()
  device_name?: string;

  @IsOptional()
  @IsString()
  os?: string;

  @IsOptional()
  @IsString()
  device_version?: string;

  @IsOptional()
  @IsString()
  app_version?: string;
}
