import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationV2VesselDto } from './create-application-v2-vessel.dto';

export class UpdateApplicationV2VesselDto extends PartialType(CreateApplicationV2VesselDto) {}
