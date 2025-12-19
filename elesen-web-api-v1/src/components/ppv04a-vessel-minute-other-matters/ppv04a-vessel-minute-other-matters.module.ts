import { Module } from '@nestjs/common';
import { Ppv04aVesselMinuteOtherMattersService } from './ppv04a-vessel-minute-other-matters.service';
import { Ppv04aVesselMinuteOtherMattersController } from './ppv04a-vessel-minute-other-matters.controller';
import { Ppv04aVesselMinuteOtherMattersEntity } from './ppv04a-vessel-minute-other-matters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselMinuteOtherMattersEntity])],
  providers: [Ppv04aVesselMinuteOtherMattersService],
  controllers: [Ppv04aVesselMinuteOtherMattersController],
  exports: [Ppv04aVesselMinuteOtherMattersService],
})
export class Ppv04aVesselMinuteOtherMattersModule {}