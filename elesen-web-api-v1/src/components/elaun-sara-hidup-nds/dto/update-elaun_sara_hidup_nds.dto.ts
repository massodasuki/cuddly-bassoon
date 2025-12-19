import { PartialType } from '@nestjs/mapped-types';
import { CreateElaunSaraHidupNdsDto } from './create-elaun_sara_hidup_nds.dto';

export class UpdateElaunSaraHidupNdsDto extends PartialType(CreateElaunSaraHidupNdsDto) {}