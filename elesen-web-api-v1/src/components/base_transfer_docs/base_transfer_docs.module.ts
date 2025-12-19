import { Module } from '@nestjs/common';
import { BaseTransferDocsService } from './base_transfer_docs.service';
import { BaseTransferDocsController } from './base_transfer_docs.controller';
import { BaseTransferDocsEntity } from './base_transfer_docs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BaseTransferDocsEntity])],
  providers: [BaseTransferDocsService],
  controllers: [BaseTransferDocsController],
  exports: [BaseTransferDocsService],
})
export class BaseTransferDocsModule {}