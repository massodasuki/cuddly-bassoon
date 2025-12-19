import { Module } from '@nestjs/common';
import { TzPermohonanInspectionAssignmentsService } from './tz_permohonan_inspection_assignments.service';
import { TzPermohonanInspectionAssignmentsController } from './tz_permohonan_inspection_assignments.controller';
import { TzPermohonanInspectionAssignmentsEntity } from './tz_permohonan_inspection_assignments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanInspectionAssignmentsEntity])],
  providers: [TzPermohonanInspectionAssignmentsService],
  controllers: [TzPermohonanInspectionAssignmentsController],
  exports: [TzPermohonanInspectionAssignmentsService],
})
export class TzPermohonanInspectionAssignmentsModule {}