import { Module } from '@nestjs/common';
import { VesselEquipmentsService } from './vessel-equipments.service';
import { VesselEquipmentsController } from './vessel-equipments.controller';
import { VesselEquipmentsEntity } from './vessel-equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselEquipmentsEntity])],
  providers: [VesselEquipmentsService],
  controllers: [VesselEquipmentsController],
  exports: [VesselEquipmentsService],
})
export class VesselEquipmentsModule {}