import { IsString, IsOptional } from 'class-validator';

export class CreateApprovalDto {
  @IsOptional()
  @IsString()
  object_type?: string;

  @IsOptional()
  @IsString()
  object_id?: string;

  @IsOptional()
  @IsString()
  action_by_type?: string;

  @IsOptional()
  @IsString()
  action_by_id?: string;

  @IsOptional()
  @IsString()
  action?: string;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsString()
  section?: string;
}
