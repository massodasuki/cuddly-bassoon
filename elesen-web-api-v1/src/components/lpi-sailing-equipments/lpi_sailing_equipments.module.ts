import { Module } from '@nestjs/common';
import { LpiSailingEquipmentsService } from './lpi_sailing_equipments.service';
import { LpiSailingEquipmentsController } from './lpi_sailing_equipments.controller';
import { LpiSailingEquipmentsEntity } from './lpi_sailing_equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiSailingEquipmentsEntity])],
  providers: [LpiSailingEquipmentsService],
  controllers: [LpiSailingEquipmentsController],
  exports: [LpiSailingEquipmentsService],
})
export class LpiSailingEquipmentsModule {}