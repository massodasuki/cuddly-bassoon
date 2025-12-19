import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselApplicationDto } from './create-ppv04a-vessel-application.dto';

export class UpdatePpv04aVesselApplicationDto extends PartialType(CreatePpv04aVesselApplicationDto) {}