import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateAttachmentDto {
  @IsOptional()
  @IsString()
  object_type?: string;

  @IsOptional()
  @IsString()
  object_id?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  filename?: string;

  @IsOptional()
  @IsString()
  ext?: string;

  @IsOptional()
  @IsNumber()
  size?: number;

  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @IsString()
  uploaded_by?: string;
}