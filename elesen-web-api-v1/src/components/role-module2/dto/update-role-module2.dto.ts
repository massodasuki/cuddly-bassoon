import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleModule2Dto } from './create-role-module2.dto';

export class UpdateRoleModule2Dto extends PartialType(CreateRoleModule2Dto) {}