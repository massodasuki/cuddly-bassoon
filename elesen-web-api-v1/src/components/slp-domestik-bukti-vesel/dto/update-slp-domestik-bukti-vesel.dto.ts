import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpDomestikBuktiVeselDto } from './create-slp-domestik-bukti-vesel.dto';

export class UpdateSlpDomestikBuktiVeselDto extends PartialType(CreateSlpDomestikBuktiVeselDto) {}