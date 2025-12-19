import { Module } from '@nestjs/common';
import { Ppv04aVesselPemantauanService } from './ppv04a-vessel-pemantauan.service';
import { Ppv04aVesselPemantauanController } from './ppv04a-vessel-pemantauan.controller';
import { Ppv04aVesselPemantauanEntity } from './ppv04a-vessel-pemantauan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselPemantauanEntity])],
  providers: [Ppv04aVesselPemantauanService],
  controllers: [Ppv04aVesselPemantauanController],
  exports: [Ppv04aVesselPemantauanService],
})
export class Ppv04aVesselPemantauanModule {}