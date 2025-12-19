import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiEnginesDto } from './create-lpi_engines.dto';

export class UpdateLpiEnginesDto extends PartialType(CreateLpiEnginesDto) {}