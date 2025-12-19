import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonansDto } from './create-tz_permohonans.dto';

export class UpdateTzPermohonansDto extends PartialType(CreateTzPermohonansDto) {}