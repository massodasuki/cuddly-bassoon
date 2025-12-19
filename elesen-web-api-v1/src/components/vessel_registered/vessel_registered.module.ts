import { Module } from '@nestjs/common';
import { VesselRegisteredService } from './vessel_registered.service';
import { VesselRegisteredController } from './vessel_registered.controller';
import { VesselRegisteredEntity } from './vessel_registered.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselRegisteredEntity])],
  providers: [VesselRegisteredService],
  controllers: [VesselRegisteredController],
  exports: [VesselRegisteredService],
})
export class VesselRegisteredModule {}