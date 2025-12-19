import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationChangeVesselToolDto } from './create-application-change-vessel-tool.dto';

export class UpdateApplicationChangeVesselToolDto extends PartialType(CreateApplicationChangeVesselToolDto) {}