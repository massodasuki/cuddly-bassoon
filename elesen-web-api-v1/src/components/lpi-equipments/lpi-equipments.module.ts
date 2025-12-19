import { Module } from '@nestjs/common';
import { LpiEquipmentsService } from './lpi-equipments.service';
import { LpiEquipmentsController } from './lpi-equipments.controller';
import { LpiEquipmentsEntity } from './lpi-equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiEquipmentsEntity])],
  providers: [LpiEquipmentsService],
  controllers: [LpiEquipmentsController],
  exports: [LpiEquipmentsService],
})
export class LpiEquipmentsModule {}