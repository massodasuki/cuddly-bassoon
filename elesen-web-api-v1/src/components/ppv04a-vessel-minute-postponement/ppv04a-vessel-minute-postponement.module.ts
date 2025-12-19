import { Module } from '@nestjs/common';
import { Ppv04aVesselMinutePostponementService } from './ppv04a-vessel-minute-postponement.service';
import { Ppv04aVesselMinutePostponementController } from './ppv04a-vessel-minute-postponement.controller';
import { Ppv04aVesselMinutePostponementEntity } from './ppv04a-vessel-minute-postponement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselMinutePostponementEntity])],
  providers: [Ppv04aVesselMinutePostponementService],
  controllers: [Ppv04aVesselMinutePostponementController],
  exports: [Ppv04aVesselMinutePostponementService],
})
export class Ppv04aVesselMinutePostponementModule {}