import { Module } from '@nestjs/common';
import { ApplicationTpuRayuanService } from './application_tpu_rayuan.service';
import { ApplicationTpuRayuanController } from './application_tpu_rayuan.controller';
import { ApplicationTpuRayuanEntity } from './application_tpu_rayuan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTpuRayuanEntity])],
  providers: [ApplicationTpuRayuanService],
  controllers: [ApplicationTpuRayuanController],
  exports: [ApplicationTpuRayuanService],
})
export class ApplicationTpuRayuanModule {}