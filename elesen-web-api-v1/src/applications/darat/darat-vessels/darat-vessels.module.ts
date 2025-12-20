import { Module } from '@nestjs/common';
import { DaratVesselService } from './darat-vessels.service';
import { DaratVesselEntityController } from './darat-vessels.controller';
import { DaratVesselEntity } from './darat-vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVesselEntity])],
  providers: [DaratVesselService],
  controllers: [DaratVesselEntityController],
  exports: [DaratVesselService],
})
export class DaratVesselModule {}

