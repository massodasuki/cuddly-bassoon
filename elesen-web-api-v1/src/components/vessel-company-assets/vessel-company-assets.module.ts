import { Module } from '@nestjs/common';
import { VesselCompanyAssetsService } from './vessel-company-assets.service';
import { VesselCompanyAssetsController } from './vessel-company-assets.controller';
import { VesselCompanyAssetsEntity } from './vessel-company-assets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselCompanyAssetsEntity])],
  providers: [VesselCompanyAssetsService],
  controllers: [VesselCompanyAssetsController],
  exports: [VesselCompanyAssetsService],
})
export class VesselCompanyAssetsModule {}