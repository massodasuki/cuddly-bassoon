import { Module } from '@nestjs/common';
import { ApplicationChangeVesselToolService } from './application_change_vessel_tool.service';
import { ApplicationChangeVesselToolController } from './application_change_vessel_tool.controller';
import { ApplicationChangeVesselToolEntity } from './application_change_vessel_tool.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationChangeVesselToolEntity])],
  providers: [ApplicationChangeVesselToolService],
  controllers: [ApplicationChangeVesselToolController],
  exports: [ApplicationChangeVesselToolService],
})
export class ApplicationChangeVesselToolModule {}