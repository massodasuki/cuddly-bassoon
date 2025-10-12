import { IsString, IsOptional } from 'class-validator';

export class CreateAuditDto {
  @IsString()
  type: string;

  @IsString()
  action: string;

  @IsOptional()
  @IsString()
  data?: string;
}