import { Module } from '@nestjs/common';
import { VesselLicenseBeneficialOwnersService } from './vessel_license_beneficial_owners.service';
import { VesselLicenseBeneficialOwnersController } from './vessel_license_beneficial_owners.controller';
import { VesselLicenseBeneficialOwnersEntity } from './vessel_license_beneficial_owners.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseBeneficialOwnersEntity])],
  providers: [VesselLicenseBeneficialOwnersService],
  controllers: [VesselLicenseBeneficialOwnersController],
  exports: [VesselLicenseBeneficialOwnersService],
})
export class VesselLicenseBeneficialOwnersModule {}