import { Module } from '@nestjs/common';
import { EshndBankChangeDocsService } from './eshnd-bank-change-docs.service';
import { EshndBankChangeDocsController } from './eshnd-bank-change-docs.controller';
import { EshndBankChangeDocsEntity } from './eshnd-bank-change-docs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EshndBankChangeDocsEntity])],
  providers: [EshndBankChangeDocsService],
  controllers: [EshndBankChangeDocsController],
  exports: [EshndBankChangeDocsService],
})
export class EshndBankChangeDocsModule {}