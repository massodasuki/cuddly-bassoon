import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceRegistrationService } from './device-registration.service';
import { DeviceRegistrationController } from './device-registration.controller';
import { DeviceRegistration } from './entities/device-registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceRegistration])],
  controllers: [DeviceRegistrationController],
  providers: [DeviceRegistrationService],
})
export class DeviceRegistrationModule {}
