import { Module } from '@nestjs/common';
import { TzPermohonanDocumentsService } from './tz_permohonan_documents.service';
import { TzPermohonanDocumentsController } from './tz_permohonan_documents.controller';
import { TzPermohonanDocumentsEntity } from './tz_permohonan_documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanDocumentsEntity])],
  providers: [TzPermohonanDocumentsService],
  controllers: [TzPermohonanDocumentsController],
  exports: [TzPermohonanDocumentsService],
})
export class TzPermohonanDocumentsModule {}