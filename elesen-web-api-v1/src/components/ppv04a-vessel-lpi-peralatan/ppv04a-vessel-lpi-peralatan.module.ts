import { Module } from '@nestjs/common';
import { Ppv04aVesselLpiPeralatanService } from './ppv04a-vessel-lpi-peralatan.service';
import { Ppv04aVesselLpiPeralatanController } from './ppv04a-vessel-lpi-peralatan.controller';
import { Ppv04aVesselLpiPeralatanEntity } from './ppv04a-vessel-lpi-peralatan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselLpiPeralatanEntity])],
  providers: [Ppv04aVesselLpiPeralatanService],
  controllers: [Ppv04aVesselLpiPeralatanController],
  exports: [Ppv04aVesselLpiPeralatanService],
})
export class Ppv04aVesselLpiPeralatanModule {}