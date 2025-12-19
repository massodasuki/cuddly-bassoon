import { Module } from '@nestjs/common';
import { LpiInlandFishingEquipmentsService } from './lpi-inland-fishing-equipments.service';
import { LpiInlandFishingEquipmentsController } from './lpi-inland-fishing-equipments.controller';
import { LpiInlandFishingEquipmentsEntity } from './lpi-inland-fishing-equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInlandFishingEquipmentsEntity])],
  providers: [LpiInlandFishingEquipmentsService],
  controllers: [LpiInlandFishingEquipmentsController],
  exports: [LpiInlandFishingEquipmentsService],
})
export class LpiInlandFishingEquipmentsModule {}