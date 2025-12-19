import { Module } from '@nestjs/common';
import { BaseTransferAppsService } from './base_transfer_apps.service';
import { BaseTransferAppsController } from './base_transfer_apps.controller';
import { BaseTransferAppsEntity } from './base_transfer_apps.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BaseTransferAppsEntity])],
  providers: [BaseTransferAppsService],
  controllers: [BaseTransferAppsController],
  exports: [BaseTransferAppsService],
})
export class BaseTransferAppsModule {}