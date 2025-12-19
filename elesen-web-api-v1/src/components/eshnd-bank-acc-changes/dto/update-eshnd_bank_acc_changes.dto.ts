import { PartialType } from '@nestjs/mapped-types';
import { CreateEshndBankAccChangesDto } from './create-eshnd_bank_acc_changes.dto';

export class UpdateEshndBankAccChangesDto extends PartialType(CreateEshndBankAccChangesDto) {}