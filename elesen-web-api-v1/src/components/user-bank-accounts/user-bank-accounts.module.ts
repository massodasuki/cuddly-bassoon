import { Module } from '@nestjs/common';
import { UserBankAccountsService } from './user-bank-accounts.service';
import { UserBankAccountsController } from './user-bank-accounts.controller';
import { UserBankAccountsEntity } from './user-bank-accounts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserBankAccountsEntity])],
  providers: [UserBankAccountsService],
  controllers: [UserBankAccountsController],
  exports: [UserBankAccountsService],
})
export class UserBankAccountsModule {}