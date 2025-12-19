import { Module } from '@nestjs/common';
import { BaseTransferLogsService } from './base_transfer_logs.service';
import { BaseTransferLogsController } from './base_transfer_logs.controller';
import { BaseTransferLogsEntity } from './base_transfer_logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BaseTransferLogsEntity])],
  providers: [BaseTransferLogsService],
  controllers: [BaseTransferLogsController],
  exports: [BaseTransferLogsService],
})
export class BaseTransferLogsModule {}