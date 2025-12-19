import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselBankStatementsDto } from './create-vessel-bank-statements.dto';

export class UpdateVesselBankStatementsDto extends PartialType(CreateVesselBankStatementsDto) {}