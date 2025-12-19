import { Module } from '@nestjs/common';
import { EshndBankAccChangesService } from './eshnd-bank-acc-changes.service';
import { EshndBankAccChangesController } from './eshnd-bank-acc-changes.controller';
import { EshndBankAccChangesEntity } from './eshnd-bank-acc-changes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EshndBankAccChangesEntity])],
  providers: [EshndBankAccChangesService],
  controllers: [EshndBankAccChangesController],
  exports: [EshndBankAccChangesService],
})
export class EshndBankAccChangesModule {}