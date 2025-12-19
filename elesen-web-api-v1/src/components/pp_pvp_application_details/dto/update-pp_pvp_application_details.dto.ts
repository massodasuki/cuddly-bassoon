import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPvpApplicationDetailsDto } from './create-pp_pvp_application_details.dto';

export class UpdatePpPvpApplicationDetailsDto extends PartialType(CreatePpPvpApplicationDetailsDto) {}