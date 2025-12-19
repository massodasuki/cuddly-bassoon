import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationLegaciesDto } from './create-application-legacies.dto';

export class UpdateApplicationLegaciesDto extends PartialType(CreateApplicationLegaciesDto) {}