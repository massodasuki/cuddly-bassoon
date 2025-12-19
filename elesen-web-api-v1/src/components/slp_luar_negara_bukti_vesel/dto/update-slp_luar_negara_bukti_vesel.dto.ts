import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpLuarNegaraBuktiVeselDto } from './create-slp_luar_negara_bukti_vesel.dto';

export class UpdateSlpLuarNegaraBuktiVeselDto extends PartialType(CreateSlpLuarNegaraBuktiVeselDto) {}