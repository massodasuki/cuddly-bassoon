import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationV2Dto } from './create-application-v2.dto';

export class UpdateApplicationV2Dto extends PartialType(CreateApplicationV2Dto) {}