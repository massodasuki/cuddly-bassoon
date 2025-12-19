import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonansDto } from './create-tz-permohonans.dto';

export class UpdateTzPermohonansDto extends PartialType(CreateTzPermohonansDto) {}