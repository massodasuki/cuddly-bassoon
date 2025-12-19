import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class SendToAllMessageDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsOptional()
  @IsObject()
  data?: Record<string, any>;
}