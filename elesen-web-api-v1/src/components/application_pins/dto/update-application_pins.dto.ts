import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationPinsDto } from './create-application_pins.dto';

export class UpdateApplicationPinsDto extends PartialType(CreateApplicationPinsDto) {}