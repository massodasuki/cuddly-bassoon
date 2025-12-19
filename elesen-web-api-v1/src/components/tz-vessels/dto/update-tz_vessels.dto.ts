import { PartialType } from '@nestjs/mapped-types';
import { CreateTzVesselsDto } from './create-tz_vessels.dto';

export class UpdateTzVesselsDto extends PartialType(CreateTzVesselsDto) {}