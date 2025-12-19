import { PartialType } from '@nestjs/mapped-types';
import { CreateEshndBankAccChangesDto } from './create-eshnd-bank-acc-changes.dto';

export class UpdateEshndBankAccChangesDto extends PartialType(CreateEshndBankAccChangesDto) {}