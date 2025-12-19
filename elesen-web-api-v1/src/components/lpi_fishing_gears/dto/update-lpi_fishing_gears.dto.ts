import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiFishingGearsDto } from './create-lpi_fishing_gears.dto';

export class UpdateLpiFishingGearsDto extends PartialType(CreateLpiFishingGearsDto) {}