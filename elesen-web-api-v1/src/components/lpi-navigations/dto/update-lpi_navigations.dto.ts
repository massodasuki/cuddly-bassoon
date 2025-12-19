import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiNavigationsDto } from './create-lpi_navigations.dto';

export class UpdateLpiNavigationsDto extends PartialType(CreateLpiNavigationsDto) {}