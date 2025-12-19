import { Module } from '@nestjs/common';
import { VesselAtfsService } from './vessel-atfs.service';
import { VesselAtfsController } from './vessel-atfs.controller';
import { VesselAtfsEntity } from './vessel-atfs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselAtfsEntity])],
  providers: [VesselAtfsService],
  controllers: [VesselAtfsController],
  exports: [VesselAtfsService],
})
export class VesselAtfsModule {}