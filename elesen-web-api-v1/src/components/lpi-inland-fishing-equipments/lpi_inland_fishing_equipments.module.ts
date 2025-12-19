import { Module } from '@nestjs/common';
import { LpiInlandFishingEquipmentsService } from './lpi_inland_fishing_equipments.service';
import { LpiInlandFishingEquipmentsController } from './lpi_inland_fishing_equipments.controller';
import { LpiInlandFishingEquipmentsEntity } from './lpi_inland_fishing_equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInlandFishingEquipmentsEntity])],
  providers: [LpiInlandFishingEquipmentsService],
  controllers: [LpiInlandFishingEquipmentsController],
  exports: [LpiInlandFishingEquipmentsService],
})
export class LpiInlandFishingEquipmentsModule {}