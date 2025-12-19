import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FcmService } from './fcm.service';
import { FcmController } from './fcm.controller';
import { DeviceRegistration } from '../device-registration/entities/device-registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceRegistration])],
  providers: [FcmService],
  controllers: [FcmController],
  exports: [FcmService],
})
export class FcmModule {}