import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselAuditedFinancialStatementsDto } from './create-vessel-audited-financial-statements.dto';

export class UpdateVesselAuditedFinancialStatementsDto extends PartialType(CreateVesselAuditedFinancialStatementsDto) {}