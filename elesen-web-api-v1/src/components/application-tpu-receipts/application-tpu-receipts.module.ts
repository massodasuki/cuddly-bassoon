import { Module } from '@nestjs/common';
import { ApplicationTpuReceiptsService } from './application-tpu-receipts.service';
import { ApplicationTpuReceiptsController } from './application-tpu-receipts.controller';
import { ApplicationTpuReceiptsEntity } from './application-tpu-receipts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTpuReceiptsEntity])],
  providers: [ApplicationTpuReceiptsService],
  controllers: [ApplicationTpuReceiptsController],
  exports: [ApplicationTpuReceiptsService],
})
export class ApplicationTpuReceiptsModule {}