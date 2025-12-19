import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiVesselsDto } from './create-lpi-vessels.dto';

export class UpdateLpiVesselsDto extends PartialType(CreateLpiVesselsDto) {}