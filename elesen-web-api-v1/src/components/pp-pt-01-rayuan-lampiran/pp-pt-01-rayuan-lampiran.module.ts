import { Module } from '@nestjs/common';
import { PpPt01RayuanLampiranService } from './pp-pt-01-rayuan-lampiran.service';
import { PpPt01RayuanLampiranController } from './pp-pt-01-rayuan-lampiran.controller';
import { PpPt01RayuanLampiranEntity } from './pp-pt-01-rayuan-lampiran.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPt01RayuanLampiranEntity])],
  providers: [PpPt01RayuanLampiranService],
  controllers: [PpPt01RayuanLampiranController],
  exports: [PpPt01RayuanLampiranService],
})
export class PpPt01RayuanLampiranModule {}