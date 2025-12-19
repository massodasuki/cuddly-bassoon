import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationChangeVesselToolApprovalLogDto } from './create-application-change-vessel-tool-approval-log.dto';

export class UpdateApplicationChangeVesselToolApprovalLogDto extends PartialType(CreateApplicationChangeVesselToolApprovalLogDto) {}