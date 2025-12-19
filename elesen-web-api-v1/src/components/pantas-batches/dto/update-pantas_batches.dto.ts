import { PartialType } from '@nestjs/mapped-types';
import { CreatePantasBatchesDto } from './create-pantas_batches.dto';

export class UpdatePantasBatchesDto extends PartialType(CreatePantasBatchesDto) {}