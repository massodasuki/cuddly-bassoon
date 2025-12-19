import { Module } from '@nestjs/common';
import { LpiSailingEquipmentsService } from './lpi-sailing-equipments.service';
import { LpiSailingEquipmentsController } from './lpi-sailing-equipments.controller';
import { LpiSailingEquipmentsEntity } from './lpi-sailing-equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiSailingEquipmentsEntity])],
  providers: [LpiSailingEquipmentsService],
  controllers: [LpiSailingEquipmentsController],
  exports: [LpiSailingEquipmentsService],
})
export class LpiSailingEquipmentsModule {}