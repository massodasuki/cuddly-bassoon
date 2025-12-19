import { Module } from '@nestjs/common';
import { VesselCompanyAssetsService } from './vessel_company_assets.service';
import { VesselCompanyAssetsController } from './vessel_company_assets.controller';
import { VesselCompanyAssetsEntity } from './vessel_company_assets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselCompanyAssetsEntity])],
  providers: [VesselCompanyAssetsService],
  controllers: [VesselCompanyAssetsController],
  exports: [VesselCompanyAssetsService],
})
export class VesselCompanyAssetsModule {}