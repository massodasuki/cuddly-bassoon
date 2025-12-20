import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeMasterDto } from './create-code-master.dto';

export class UpdateCodeMasterDto extends PartialType(CreateCodeMasterDto) {}
