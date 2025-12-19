import { Module } from '@nestjs/common';
import { MppiVesselPemantauanService } from './mppi-vessel-pemantauan.service';
import { MppiVesselPemantauanController } from './mppi-vessel-pemantauan.controller';
import { MppiVesselPemantauanEntity } from './mppi-vessel-pemantauan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselPemantauanEntity])],
  providers: [MppiVesselPemantauanService],
  controllers: [MppiVesselPemantauanController],
  exports: [MppiVesselPemantauanService],
})
export class MppiVesselPemantauanModule {}