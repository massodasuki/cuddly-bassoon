import { Module } from '@nestjs/common';
import { EshndBankAccChangesService } from './eshnd_bank_acc_changes.service';
import { EshndBankAccChangesController } from './eshnd_bank_acc_changes.controller';
import { EshndBankAccChangesEntity } from './eshnd_bank_acc_changes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EshndBankAccChangesEntity])],
  providers: [EshndBankAccChangesService],
  controllers: [EshndBankAccChangesController],
  exports: [EshndBankAccChangesService],
})
export class EshndBankAccChangesModule {}