import { Module } from '@nestjs/common';
import { BaseTransferDocsService } from './base-transfer-docs.service';
import { BaseTransferDocsController } from './base-transfer-docs.controller';
import { BaseTransferDocsEntity } from './base-transfer-docs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BaseTransferDocsEntity])],
  providers: [BaseTransferDocsService],
  controllers: [BaseTransferDocsController],
  exports: [BaseTransferDocsService],
})
export class BaseTransferDocsModule {}