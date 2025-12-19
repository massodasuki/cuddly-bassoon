import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class SendMessageDto {
  @IsString()
  username: string;
  
  @IsString()
  @IsOptional()
  token: string;

  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsOptional()
  @IsObject()
  data?: Record<string, any>;
}