import { IsString, IsOptional, IsObject } from 'class-validator';

export class SendToAllMessageDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsOptional()
  @IsObject()
  data?: Record<string, any>;
}