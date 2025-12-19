import { Module } from '@nestjs/common';
import { ApplicationTpuSsdService } from './application-tpu-ssd.service';
import { ApplicationTpuSsdController } from './application-tpu-ssd.controller';
import { ApplicationTpuSsdEntity } from './application-tpu-ssd.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTpuSsdEntity])],
  providers: [ApplicationTpuSsdService],
  controllers: [ApplicationTpuSsdController],
  exports: [ApplicationTpuSsdService],
})
export class ApplicationTpuSsdModule {}