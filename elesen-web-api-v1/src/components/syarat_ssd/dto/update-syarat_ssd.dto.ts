import { PartialType } from '@nestjs/mapped-types';
import { CreateSyaratSsdDto } from './create-syarat_ssd.dto';

export class UpdateSyaratSsdDto extends PartialType(CreateSyaratSsdDto) {}