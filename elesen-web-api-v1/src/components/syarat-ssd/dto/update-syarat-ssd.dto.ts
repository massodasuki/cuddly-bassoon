import { PartialType } from '@nestjs/mapped-types';
import { CreateSyaratSsdDto } from './create-syarat-ssd.dto';

export class UpdateSyaratSsdDto extends PartialType(CreateSyaratSsdDto) {}