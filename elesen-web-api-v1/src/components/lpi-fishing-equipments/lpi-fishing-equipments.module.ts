import { Module } from '@nestjs/common';
import { LpiFishingEquipmentsService } from './lpi-fishing-equipments.service';
import { LpiFishingEquipmentsController } from './lpi-fishing-equipments.controller';
import { LpiFishingEquipmentsEntity } from './lpi-fishing-equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiFishingEquipmentsEntity])],
  providers: [LpiFishingEquipmentsService],
  controllers: [LpiFishingEquipmentsController],
  exports: [LpiFishingEquipmentsService],
})
export class LpiFishingEquipmentsModule {}