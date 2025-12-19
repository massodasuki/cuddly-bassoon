import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpLuarNegaraBuktiVeselDto } from './create-slp-luar-negara-bukti-vesel.dto';

export class UpdateSlpLuarNegaraBuktiVeselDto extends PartialType(CreateSlpLuarNegaraBuktiVeselDto) {}