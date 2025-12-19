import { Module } from '@nestjs/common';
import { BaseTransferAppsService } from './base-transfer-apps.service';
import { BaseTransferAppsController } from './base-transfer-apps.controller';
import { BaseTransferAppsEntity } from './base-transfer-apps.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BaseTransferAppsEntity])],
  providers: [BaseTransferAppsService],
  controllers: [BaseTransferAppsController],
  exports: [BaseTransferAppsService],
})
export class BaseTransferAppsModule {}