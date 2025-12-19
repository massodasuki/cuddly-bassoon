import { Module } from '@nestjs/common';
import { Ppv04aVesselLpiService } from './ppv04a-vessel-lpi.service';
import { Ppv04aVesselLpiController } from './ppv04a-vessel-lpi.controller';
import { Ppv04aVesselLpiEntity } from './ppv04a-vessel-lpi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselLpiEntity])],
  providers: [Ppv04aVesselLpiService],
  controllers: [Ppv04aVesselLpiController],
  exports: [Ppv04aVesselLpiService],
})
export class Ppv04aVesselLpiModule {}