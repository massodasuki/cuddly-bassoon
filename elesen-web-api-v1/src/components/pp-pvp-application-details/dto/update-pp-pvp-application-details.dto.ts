import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPvpApplicationDetailsDto } from './create-pp-pvp-application-details.dto';

export class UpdatePpPvpApplicationDetailsDto extends PartialType(CreatePpPvpApplicationDetailsDto) {}