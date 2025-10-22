import { IsString } from 'class-validator';

export class CreateApplicationV2ProfileUserDto {
  @IsString()
  application_id: string;

  @IsString()
  profile_user_id: string;
}