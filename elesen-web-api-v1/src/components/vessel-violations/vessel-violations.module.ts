import { Module } from '@nestjs/common';
import { VesselViolationsService } from './vessel-violations.service';
import { VesselViolationsController } from './vessel-violations.controller';
import { VesselViolationsEntity } from './vessel-violations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselViolationsEntity])],
  providers: [VesselViolationsService],
  controllers: [VesselViolationsController],
  exports: [VesselViolationsService],
})
export class VesselViolationsModule {}