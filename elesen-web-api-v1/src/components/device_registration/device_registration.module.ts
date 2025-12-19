import { Module } from '@nestjs/common';
import { DeviceRegistrationService } from './device_registration.service';
import { DeviceRegistrationController } from './device_registration.controller';
import { DeviceRegistrationEntity } from './device_registration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceRegistrationEntity])],
  providers: [DeviceRegistrationService],
  controllers: [DeviceRegistrationController],
  exports: [DeviceRegistrationService],
})
export class DeviceRegistrationModule {}