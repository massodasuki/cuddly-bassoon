import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpDomestikApplicationsDto } from './create-slp_domestik_applications.dto';

export class UpdateSlpDomestikApplicationsDto extends PartialType(CreateSlpDomestikApplicationsDto) {}