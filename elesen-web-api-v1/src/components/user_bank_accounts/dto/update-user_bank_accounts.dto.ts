import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBankAccountsDto } from './create-user_bank_accounts.dto';

export class UpdateUserBankAccountsDto extends PartialType(CreateUserBankAccountsDto) {}