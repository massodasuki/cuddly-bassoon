import { PartialType } from '@nestjs/mapped-types';
import { CreateElaunSaraHidupNdsDto } from './create-elaun-sara-hidup-nds.dto';

export class UpdateElaunSaraHidupNdsDto extends PartialType(CreateElaunSaraHidupNdsDto) {}