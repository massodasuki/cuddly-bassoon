import { Module } from '@nestjs/common';
import { UserBankAccountsService } from './user_bank_accounts.service';
import { UserBankAccountsController } from './user_bank_accounts.controller';
import { UserBankAccountsEntity } from './user_bank_accounts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserBankAccountsEntity])],
  providers: [UserBankAccountsService],
  controllers: [UserBankAccountsController],
  exports: [UserBankAccountsService],
})
export class UserBankAccountsModule {}