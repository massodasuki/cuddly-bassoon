import { Module } from '@nestjs/common';
import { VesselEquipmentsService } from './vessel_equipments.service';
import { VesselEquipmentsController } from './vessel_equipments.controller';
import { VesselEquipmentsEntity } from './vessel_equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselEquipmentsEntity])],
  providers: [VesselEquipmentsService],
  controllers: [VesselEquipmentsController],
  exports: [VesselEquipmentsService],
})
export class VesselEquipmentsModule {}