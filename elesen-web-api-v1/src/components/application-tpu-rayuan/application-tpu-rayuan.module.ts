import { Module } from '@nestjs/common';
import { ApplicationTpuRayuanService } from './application-tpu-rayuan.service';
import { ApplicationTpuRayuanController } from './application-tpu-rayuan.controller';
import { ApplicationTpuRayuanEntity } from './application-tpu-rayuan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTpuRayuanEntity])],
  providers: [ApplicationTpuRayuanService],
  controllers: [ApplicationTpuRayuanController],
  exports: [ApplicationTpuRayuanService],
})
export class ApplicationTpuRayuanModule {}