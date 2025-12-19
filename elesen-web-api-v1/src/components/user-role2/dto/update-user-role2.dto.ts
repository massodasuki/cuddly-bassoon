import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRole2Dto } from './create-user-role2.dto';

export class UpdateUserRole2Dto extends PartialType(CreateUserRole2Dto) {}