import { Module } from '@nestjs/common';
import { BaseTransferLogsService } from './base-transfer-logs.service';
import { BaseTransferLogsController } from './base-transfer-logs.controller';
import { BaseTransferLogsEntity } from './base-transfer-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BaseTransferLogsEntity])],
  providers: [BaseTransferLogsService],
  controllers: [BaseTransferLogsController],
  exports: [BaseTransferLogsService],
})
export class BaseTransferLogsModule {}