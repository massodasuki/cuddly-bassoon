import { PartialType } from '@nestjs/mapped-types';
import { CreateGeEngineInfoDto } from './create-ge_engine_info.dto';

export class UpdateGeEngineInfoDto extends PartialType(CreateGeEngineInfoDto) {}