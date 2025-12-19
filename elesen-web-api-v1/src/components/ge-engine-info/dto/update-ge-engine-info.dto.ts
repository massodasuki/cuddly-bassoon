import { PartialType } from '@nestjs/mapped-types';
import { CreateGeEngineInfoDto } from './create-ge-engine-info.dto';

export class UpdateGeEngineInfoDto extends PartialType(CreateGeEngineInfoDto) {}