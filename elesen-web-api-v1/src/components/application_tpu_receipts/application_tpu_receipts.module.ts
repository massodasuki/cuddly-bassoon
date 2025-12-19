import { Module } from '@nestjs/common';
import { ApplicationTpuReceiptsService } from './application_tpu_receipts.service';
import { ApplicationTpuReceiptsController } from './application_tpu_receipts.controller';
import { ApplicationTpuReceiptsEntity } from './application_tpu_receipts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTpuReceiptsEntity])],
  providers: [ApplicationTpuReceiptsService],
  controllers: [ApplicationTpuReceiptsController],
  exports: [ApplicationTpuReceiptsService],
})
export class ApplicationTpuReceiptsModule {}