import { Module } from '@nestjs/common';
import { Ppv04aVesselLogService } from './ppv04a-vessel-log.service';
import { Ppv04aVesselLogController } from './ppv04a-vessel-log.controller';
import { Ppv04aVesselLogEntity } from './ppv04a-vessel-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselLogEntity])],
  providers: [Ppv04aVesselLogService],
  controllers: [Ppv04aVesselLogController],
  exports: [Ppv04aVesselLogService],
})
export class Ppv04aVesselLogModule {}