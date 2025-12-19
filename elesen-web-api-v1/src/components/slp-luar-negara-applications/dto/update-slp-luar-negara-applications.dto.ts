import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpLuarNegaraApplicationsDto } from './create-slp-luar-negara-applications.dto';

export class UpdateSlpLuarNegaraApplicationsDto extends PartialType(CreateSlpLuarNegaraApplicationsDto) {}