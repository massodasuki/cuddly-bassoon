import { Module } from '@nestjs/common';
import { LpiFishingEquipmentsService } from './lpi_fishing_equipments.service';
import { LpiFishingEquipmentsController } from './lpi_fishing_equipments.controller';
import { LpiFishingEquipmentsEntity } from './lpi_fishing_equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiFishingEquipmentsEntity])],
  providers: [LpiFishingEquipmentsService],
  controllers: [LpiFishingEquipmentsController],
  exports: [LpiFishingEquipmentsService],
})
export class LpiFishingEquipmentsModule {}