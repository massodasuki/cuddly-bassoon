import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpDomestikApplicationsDto } from './create-slp-domestik-applications.dto';

export class UpdateSlpDomestikApplicationsDto extends PartialType(CreateSlpDomestikApplicationsDto) {}