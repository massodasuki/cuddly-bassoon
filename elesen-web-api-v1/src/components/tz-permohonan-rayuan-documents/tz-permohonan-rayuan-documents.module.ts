import { Module } from '@nestjs/common';
import { TzPermohonanRayuanDocumentsService } from './tz-permohonan-rayuan-documents.service';
import { TzPermohonanRayuanDocumentsController } from './tz-permohonan-rayuan-documents.controller';
import { TzPermohonanRayuanDocumentsEntity } from './tz-permohonan-rayuan-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanRayuanDocumentsEntity])],
  providers: [TzPermohonanRayuanDocumentsService],
  controllers: [TzPermohonanRayuanDocumentsController],
  exports: [TzPermohonanRayuanDocumentsService],
})
export class TzPermohonanRayuanDocumentsModule {}