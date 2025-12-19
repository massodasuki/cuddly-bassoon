import { Module } from '@nestjs/common';
import { SlpLuarNegaraDocumentsService } from './slp-luar-negara-documents.service';
import { SlpLuarNegaraDocumentsController } from './slp-luar-negara-documents.controller';
import { SlpLuarNegaraDocumentsEntity } from './slp-luar-negara-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpLuarNegaraDocumentsEntity])],
  providers: [SlpLuarNegaraDocumentsService],
  controllers: [SlpLuarNegaraDocumentsController],
  exports: [SlpLuarNegaraDocumentsService],
})
export class SlpLuarNegaraDocumentsModule {}