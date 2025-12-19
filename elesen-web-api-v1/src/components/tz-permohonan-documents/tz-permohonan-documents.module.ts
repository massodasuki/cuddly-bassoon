import { Module } from '@nestjs/common';
import { TzPermohonanDocumentsService } from './tz-permohonan-documents.service';
import { TzPermohonanDocumentsController } from './tz-permohonan-documents.controller';
import { TzPermohonanDocumentsEntity } from './tz-permohonan-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanDocumentsEntity])],
  providers: [TzPermohonanDocumentsService],
  controllers: [TzPermohonanDocumentsController],
  exports: [TzPermohonanDocumentsService],
})
export class TzPermohonanDocumentsModule {}