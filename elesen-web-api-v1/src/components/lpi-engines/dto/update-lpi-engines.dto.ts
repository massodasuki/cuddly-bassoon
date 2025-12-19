import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiEnginesDto } from './create-lpi-engines.dto';

export class UpdateLpiEnginesDto extends PartialType(CreateLpiEnginesDto) {}