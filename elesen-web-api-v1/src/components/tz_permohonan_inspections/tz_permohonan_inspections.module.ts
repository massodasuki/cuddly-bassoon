import { Module } from '@nestjs/common';
import { TzPermohonanInspectionsService } from './tz_permohonan_inspections.service';
import { TzPermohonanInspectionsController } from './tz_permohonan_inspections.controller';
import { TzPermohonanInspectionsEntity } from './tz_permohonan_inspections.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanInspectionsEntity])],
  providers: [TzPermohonanInspectionsService],
  controllers: [TzPermohonanInspectionsController],
  exports: [TzPermohonanInspectionsService],
})
export class TzPermohonanInspectionsModule {}