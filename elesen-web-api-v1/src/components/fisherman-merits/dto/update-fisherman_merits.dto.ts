import { PartialType } from '@nestjs/mapped-types';
import { CreateFishermanMeritsDto } from './create-fisherman_merits.dto';

export class UpdateFishermanMeritsDto extends PartialType(CreateFishermanMeritsDto) {}