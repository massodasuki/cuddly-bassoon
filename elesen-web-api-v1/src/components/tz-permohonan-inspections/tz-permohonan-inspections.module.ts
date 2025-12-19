import { Module } from '@nestjs/common';
import { TzPermohonanInspectionsService } from './tz-permohonan-inspections.service';
import { TzPermohonanInspectionsController } from './tz-permohonan-inspections.controller';
import { TzPermohonanInspectionsEntity } from './tz-permohonan-inspections.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanInspectionsEntity])],
  providers: [TzPermohonanInspectionsService],
  controllers: [TzPermohonanInspectionsController],
  exports: [TzPermohonanInspectionsService],
})
export class TzPermohonanInspectionsModule {}