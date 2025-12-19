import { Module } from '@nestjs/common';
import { ApplicationTpuSsdService } from './application_tpu_ssd.service';
import { ApplicationTpuSsdController } from './application_tpu_ssd.controller';
import { ApplicationTpuSsdEntity } from './application_tpu_ssd.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTpuSsdEntity])],
  providers: [ApplicationTpuSsdService],
  controllers: [ApplicationTpuSsdController],
  exports: [ApplicationTpuSsdService],
})
export class ApplicationTpuSsdModule {}