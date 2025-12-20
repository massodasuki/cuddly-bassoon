import { IsString, IsObject, IsOptional } from 'class-validator';

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
