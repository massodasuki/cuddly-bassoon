import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationChangeVesselToolApprovalLogDto } from './create-application_change_vessel_tool_approval_log.dto';

export class UpdateApplicationChangeVesselToolApprovalLogDto extends PartialType(CreateApplicationChangeVesselToolApprovalLogDto) {}