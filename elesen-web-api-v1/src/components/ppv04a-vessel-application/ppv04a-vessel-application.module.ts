import { Module } from '@nestjs/common';
import { Ppv04aVesselApplicationService } from './ppv04a-vessel-application.service';
import { Ppv04aVesselApplicationController } from './ppv04a-vessel-application.controller';
import { Ppv04aVesselApplicationEntity } from './ppv04a-vessel-application.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselApplicationEntity])],
  providers: [Ppv04aVesselApplicationService],
  controllers: [Ppv04aVesselApplicationController],
  exports: [Ppv04aVesselApplicationService],
})
export class Ppv04aVesselApplicationModule {}