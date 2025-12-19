import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPt01ApprovalsDto } from './create-pp-pt-01-approvals.dto';

export class UpdatePpPt01ApprovalsDto extends PartialType(CreatePpPt01ApprovalsDto) {}