import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileUserDto } from './create-profile-users.dto';

export class UpdateProfileUserDto extends PartialType(CreateProfileUserDto) {}
