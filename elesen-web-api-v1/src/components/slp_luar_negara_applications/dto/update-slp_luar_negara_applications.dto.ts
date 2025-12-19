import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpLuarNegaraApplicationsDto } from './create-slp_luar_negara_applications.dto';

export class UpdateSlpLuarNegaraApplicationsDto extends PartialType(CreateSlpLuarNegaraApplicationsDto) {}