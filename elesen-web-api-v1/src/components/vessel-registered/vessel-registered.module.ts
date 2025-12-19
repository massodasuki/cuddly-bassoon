import { Module } from '@nestjs/common';
import { VesselRegisteredService } from './vessel-registered.service';
import { VesselRegisteredController } from './vessel-registered.controller';
import { VesselRegisteredEntity } from './vessel-registered.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselRegisteredEntity])],
  providers: [VesselRegisteredService],
  controllers: [VesselRegisteredController],
  exports: [VesselRegisteredService],
})
export class VesselRegisteredModule {}