import { PartialType } from '@nestjs/mapped-types';
import { CreateEshndBankChangeDocsDto } from './create-eshnd-bank-change-docs.dto';

export class UpdateEshndBankChangeDocsDto extends PartialType(CreateEshndBankChangeDocsDto) {}