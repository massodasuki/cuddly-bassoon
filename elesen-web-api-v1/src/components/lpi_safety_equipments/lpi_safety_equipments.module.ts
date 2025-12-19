import { Module } from '@nestjs/common';
import { LpiSafetyEquipmentsService } from './lpi_safety_equipments.service';
import { LpiSafetyEquipmentsController } from './lpi_safety_equipments.controller';
import { LpiSafetyEquipmentsEntity } from './lpi_safety_equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiSafetyEquipmentsEntity])],
  providers: [LpiSafetyEquipmentsService],
  controllers: [LpiSafetyEquipmentsController],
  exports: [LpiSafetyEquipmentsService],
})
export class LpiSafetyEquipmentsModule {}