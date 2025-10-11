import { IsString } from 'class-validator';

export class CreateApplicationV2VesselDto {
  @IsString()
  application_id: string;

  @IsString()
  vessel_id: string;
}