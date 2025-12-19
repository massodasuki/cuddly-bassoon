import { Module } from '@nestjs/common';
import { PpPt01RayuanService } from './pp_pt_01_rayuan.service';
import { PpPt01RayuanController } from './pp_pt_01_rayuan.controller';
import { PpPt01RayuanEntity } from './pp_pt_01_rayuan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPt01RayuanEntity])],
  providers: [PpPt01RayuanService],
  controllers: [PpPt01RayuanController],
  exports: [PpPt01RayuanService],
})
export class PpPt01RayuanModule {}