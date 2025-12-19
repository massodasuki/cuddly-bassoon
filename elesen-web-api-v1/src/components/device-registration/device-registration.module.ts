import { Module } from '@nestjs/common';
import { DeviceRegistrationService } from './device-registration.service';
import { DeviceRegistrationController } from './device-registration.controller';
import { DeviceRegistrationEntity } from './device-registration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceRegistrationEntity])],
  providers: [DeviceRegistrationService],
  controllers: [DeviceRegistrationController],
  exports: [DeviceRegistrationService],
})
export class DeviceRegistrationModule {}