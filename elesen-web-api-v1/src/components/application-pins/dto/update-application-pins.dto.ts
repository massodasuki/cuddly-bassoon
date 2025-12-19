import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationPinDto } from './create-application-pins.dto';

export class UpdateApplicationPinDto extends PartialType(CreateApplicationPinDto) {}