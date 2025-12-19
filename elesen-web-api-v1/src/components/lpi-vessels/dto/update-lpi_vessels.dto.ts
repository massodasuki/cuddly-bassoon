import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiVesselsDto } from './create-lpi_vessels.dto';

export class UpdateLpiVesselsDto extends PartialType(CreateLpiVesselsDto) {}