import { Module } from '@nestjs/common';
import { PpPt01RayuanService } from './pp-pt-01-rayuan.service';
import { PpPt01RayuanController } from './pp-pt-01-rayuan.controller';
import { PpPt01RayuanEntity } from './pp-pt-01-rayuan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPt01RayuanEntity])],
  providers: [PpPt01RayuanService],
  controllers: [PpPt01RayuanController],
  exports: [PpPt01RayuanService],
})
export class PpPt01RayuanModule {}