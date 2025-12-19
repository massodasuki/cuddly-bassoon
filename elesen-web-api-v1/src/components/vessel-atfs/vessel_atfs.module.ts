import { Module } from '@nestjs/common';
import { VesselAtfsService } from './vessel_atfs.service';
import { VesselAtfsController } from './vessel_atfs.controller';
import { VesselAtfsEntity } from './vessel_atfs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselAtfsEntity])],
  providers: [VesselAtfsService],
  controllers: [VesselAtfsController],
  exports: [VesselAtfsService],
})
export class VesselAtfsModule {}