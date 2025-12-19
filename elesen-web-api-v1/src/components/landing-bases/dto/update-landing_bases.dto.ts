import { PartialType } from '@nestjs/mapped-types';
import { CreateLandingBasesDto } from './create-landing_bases.dto';

export class UpdateLandingBasesDto extends PartialType(CreateLandingBasesDto) {}