import { Module } from '@nestjs/common';
import { VesselService } from './vessels.service';
import { VesselEntityController } from './vessels.controller';
import { VesselEntity } from './vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselEntity])],
  providers: [VesselService],
  controllers: [VesselEntityController],
  exports: [VesselService],
})
export class VesselModule {}
