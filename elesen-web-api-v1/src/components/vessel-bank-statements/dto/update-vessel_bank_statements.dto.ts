import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselBankStatementsDto } from './create-vessel_bank_statements.dto';

export class UpdateVesselBankStatementsDto extends PartialType(CreateVesselBankStatementsDto) {}