import { PartialType } from '@nestjs/mapped-types';
import { CreateEshndBankChangeDocsDto } from './create-eshnd_bank_change_docs.dto';

export class UpdateEshndBankChangeDocsDto extends PartialType(CreateEshndBankChangeDocsDto) {}