import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpDomestikBuktiVeselDto } from './create-slp_domestik_bukti_vesel.dto';

export class UpdateSlpDomestikBuktiVeselDto extends PartialType(CreateSlpDomestikBuktiVeselDto) {}