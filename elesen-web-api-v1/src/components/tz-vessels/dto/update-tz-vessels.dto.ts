import { PartialType } from '@nestjs/mapped-types';
import { CreateTzVesselsDto } from './create-tz-vessels.dto';

export class UpdateTzVesselsDto extends PartialType(CreateTzVesselsDto) {}