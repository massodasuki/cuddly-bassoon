import { IsString, IsObject, IsOptional } from 'class-validator';

export class SendToAllMessageDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsOptional()
  @IsObject()
  data?: Record<string, any>;
}