import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationAtfDto } from './create-application_atf.dto';

export class UpdateApplicationAtfDto extends PartialType(CreateApplicationAtfDto) {}