import { Module } from '@nestjs/common';


@Module({
  imports: [TypeOrmModule.forFeature([DeviceRegistrationEntity])],
  providers: [FcmService],
  controllers: [FcmController],
  exports: [FcmService],
})
export class FcmModule {}