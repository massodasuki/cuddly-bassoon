import { Module } from '@nestjs/common';
import { TzPermohonanRayuanDocumentsService } from './tz_permohonan_rayuan_documents.service';
import { TzPermohonanRayuanDocumentsController } from './tz_permohonan_rayuan_documents.controller';
import { TzPermohonanRayuanDocumentsEntity } from './tz_permohonan_rayuan_documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanRayuanDocumentsEntity])],
  providers: [TzPermohonanRayuanDocumentsService],
  controllers: [TzPermohonanRayuanDocumentsController],
  exports: [TzPermohonanRayuanDocumentsService],
})
export class TzPermohonanRayuanDocumentsModule {}