import { Module } from '@nestjs/common';
import { EshndBankChangeDocsService } from './eshnd_bank_change_docs.service';
import { EshndBankChangeDocsController } from './eshnd_bank_change_docs.controller';
import { EshndBankChangeDocsEntity } from './eshnd_bank_change_docs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EshndBankChangeDocsEntity])],
  providers: [EshndBankChangeDocsService],
  controllers: [EshndBankChangeDocsController],
  exports: [EshndBankChangeDocsService],
})
export class EshndBankChangeDocsModule {}