import { Module } from '@nestjs/common';
import { LpiSafetyEquipmentsService } from './lpi-safety-equipments.service';
import { LpiSafetyEquipmentsController } from './lpi-safety-equipments.controller';
import { LpiSafetyEquipmentsEntity } from './lpi-safety-equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiSafetyEquipmentsEntity])],
  providers: [LpiSafetyEquipmentsService],
  controllers: [LpiSafetyEquipmentsController],
  exports: [LpiSafetyEquipmentsService],
})
export class LpiSafetyEquipmentsModule {}