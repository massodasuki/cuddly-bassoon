import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselAuditedFinancialStatementsDto } from './create-vessel_audited_financial_statements.dto';

export class UpdateVesselAuditedFinancialStatementsDto extends PartialType(CreateVesselAuditedFinancialStatementsDto) {}