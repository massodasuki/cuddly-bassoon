import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationV2ProfileUserDto } from './create-application-v2-profile-user.dto';

export class UpdateApplicationV2ProfileUserDto extends PartialType(CreateApplicationV2ProfileUserDto) {}