import { PartialType } from '@nestjs/swagger';
import { CreateLpiFormDto } from './create-lpi-form.dto';

export class UpdateLpiFormDto extends PartialType(CreateLpiFormDto) {}
