import { Module } from '@nestjs/common';
import { TzPermohonanInspectionAssignmentsService } from './tz-permohonan-inspection-assignments.service';
import { TzPermohonanInspectionAssignmentsController } from './tz-permohonan-inspection-assignments.controller';
import { TzPermohonanInspectionAssignmentsEntity } from './tz-permohonan-inspection-assignments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanInspectionAssignmentsEntity])],
  providers: [TzPermohonanInspectionAssignmentsService],
  controllers: [TzPermohonanInspectionAssignmentsController],
  exports: [TzPermohonanInspectionAssignmentsService],
})
export class TzPermohonanInspectionAssignmentsModule {}