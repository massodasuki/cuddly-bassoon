import { Module } from '@nestjs/common';
import { LpiEquipmentsService } from './lpi_equipments.service';
import { LpiEquipmentsController } from './lpi_equipments.controller';
import { LpiEquipmentsEntity } from './lpi_equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiEquipmentsEntity])],
  providers: [LpiEquipmentsService],
  controllers: [LpiEquipmentsController],
  exports: [LpiEquipmentsService],
})
export class LpiEquipmentsModule {}