import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationChangeVesselToolDto } from './create-application_change_vessel_tool.dto';

export class UpdateApplicationChangeVesselToolDto extends PartialType(CreateApplicationChangeVesselToolDto) {}