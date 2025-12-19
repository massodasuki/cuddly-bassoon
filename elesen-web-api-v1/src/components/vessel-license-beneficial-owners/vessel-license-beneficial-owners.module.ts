import { Module } from '@nestjs/common';
import { VesselLicenseBeneficialOwnersService } from './vessel-license-beneficial-owners.service';
import { VesselLicenseBeneficialOwnersController } from './vessel-license-beneficial-owners.controller';
import { VesselLicenseBeneficialOwnersEntity } from './vessel-license-beneficial-owners.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseBeneficialOwnersEntity])],
  providers: [VesselLicenseBeneficialOwnersService],
  controllers: [VesselLicenseBeneficialOwnersController],
  exports: [VesselLicenseBeneficialOwnersService],
})
export class VesselLicenseBeneficialOwnersModule {}