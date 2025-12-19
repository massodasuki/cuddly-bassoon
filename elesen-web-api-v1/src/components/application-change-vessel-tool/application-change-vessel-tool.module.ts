import { Module } from '@nestjs/common';
import { ApplicationChangeVesselToolService } from './application-change-vessel-tool.service';
import { ApplicationChangeVesselToolController } from './application-change-vessel-tool.controller';
import { ApplicationChangeVesselToolEntity } from './application-change-vessel-tool.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationChangeVesselToolEntity])],
  providers: [ApplicationChangeVesselToolService],
  controllers: [ApplicationChangeVesselToolController],
  exports: [ApplicationChangeVesselToolService],
})
export class ApplicationChangeVesselToolModule {}