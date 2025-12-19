import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FcmService } from './fcm.service';
import { FcmController } from './fcm.controller';
import { DeviceRegistrationEntity } from '../common/entities/device_registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceRegistrationEntity])],
  providers: [FcmService],
  controllers: [FcmController],
  exports: [FcmService],
})
export class FcmModule {}