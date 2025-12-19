import { Module } from '@nestjs/common';
import { PpPt01RayuanLampiranService } from './pp_pt_01_rayuan_lampiran.service';
import { PpPt01RayuanLampiranController } from './pp_pt_01_rayuan_lampiran.controller';
import { PpPt01RayuanLampiranEntity } from './pp_pt_01_rayuan_lampiran.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPt01RayuanLampiranEntity])],
  providers: [PpPt01RayuanLampiranService],
  controllers: [PpPt01RayuanLampiranController],
  exports: [PpPt01RayuanLampiranService],
})
export class PpPt01RayuanLampiranModule {}