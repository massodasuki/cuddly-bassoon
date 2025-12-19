import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiNavigationsDto } from './create-lpi-navigations.dto';

export class UpdateLpiNavigationsDto extends PartialType(CreateLpiNavigationsDto) {}