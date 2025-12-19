import { PartialType } from '@nestjs/mapped-types';
import { CreateModules2Dto } from './create-modules2.dto';

export class UpdateModules2Dto extends PartialType(CreateModules2Dto) {}