import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselsDto } from './create-vessels.dto';

export class UpdateVesselsDto extends PartialType(CreateVesselsDto) {}