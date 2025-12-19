import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPt01ApprovalsDto } from './create-pp_pt_01_approvals.dto';

export class UpdatePpPt01ApprovalsDto extends PartialType(CreatePpPt01ApprovalsDto) {}