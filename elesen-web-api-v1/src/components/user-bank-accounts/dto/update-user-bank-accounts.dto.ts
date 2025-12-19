import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBankAccountsDto } from './create-user-bank-accounts.dto';

export class UpdateUserBankAccountsDto extends PartialType(CreateUserBankAccountsDto) {}