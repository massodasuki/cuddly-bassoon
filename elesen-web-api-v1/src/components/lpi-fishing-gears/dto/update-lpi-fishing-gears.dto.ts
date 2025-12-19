import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiFishingGearsDto } from './create-lpi-fishing-gears.dto';

export class UpdateLpiFishingGearsDto extends PartialType(CreateLpiFishingGearsDto) {}