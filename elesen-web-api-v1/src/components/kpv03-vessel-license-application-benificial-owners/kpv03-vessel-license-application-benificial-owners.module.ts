import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationBenificialOwnersService } from './kpv03-vessel-license-application-benificial-owners.service';
import { Kpv03VesselLicenseApplicationBenificialOwnersController } from './kpv03-vessel-license-application-benificial-owners.controller';
import { Kpv03VesselLicenseApplicationBenificialOwnersEntity } from './kpv03-vessel-license-application-benificial-owners.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationBenificialOwnersEntity])],
  providers: [Kpv03VesselLicenseApplicationBenificialOwnersService],
  controllers: [Kpv03VesselLicenseApplicationBenificialOwnersController],
  exports: [Kpv03VesselLicenseApplicationBenificialOwnersService],
})
export class Kpv03VesselLicenseApplicationBenificialOwnersModule {}