import { Module } from '@nestjs/common';
import { VesselViolationsService } from './vessel_violations.service';
import { VesselViolationsController } from './vessel_violations.controller';
import { VesselViolationsEntity } from './vessel_violations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselViolationsEntity])],
  providers: [VesselViolationsService],
  controllers: [VesselViolationsController],
  exports: [VesselViolationsService],
})
export class VesselViolationsModule {}