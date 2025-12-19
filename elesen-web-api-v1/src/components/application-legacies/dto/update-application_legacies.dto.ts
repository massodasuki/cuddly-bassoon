import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationLegaciesDto } from './create-application_legacies.dto';

export class UpdateApplicationLegaciesDto extends PartialType(CreateApplicationLegaciesDto) {}