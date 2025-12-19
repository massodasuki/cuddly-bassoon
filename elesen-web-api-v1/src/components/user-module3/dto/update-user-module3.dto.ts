import { PartialType } from '@nestjs/mapped-types';
import { CreateUserModule3Dto } from './create-user-module3.dto';

export class UpdateUserModule3Dto extends PartialType(CreateUserModule3Dto) {}