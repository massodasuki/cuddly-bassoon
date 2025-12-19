import { Module } from '@nestjs/common';
import { SlpLuarNegaraDocumentsService } from './slp_luar_negara_documents.service';
import { SlpLuarNegaraDocumentsController } from './slp_luar_negara_documents.controller';
import { SlpLuarNegaraDocumentsEntity } from './slp_luar_negara_documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpLuarNegaraDocumentsEntity])],
  providers: [SlpLuarNegaraDocumentsService],
  controllers: [SlpLuarNegaraDocumentsController],
  exports: [SlpLuarNegaraDocumentsService],
})
export class SlpLuarNegaraDocumentsModule {}