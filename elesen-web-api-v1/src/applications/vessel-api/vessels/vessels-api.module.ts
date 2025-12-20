import { Module } from '@nestjs/common';
import { VesselsApiService } from './vessels-api.service';
import { VesselsApiController } from './vessels-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselEntity } from '../../marin/entities/vessel.entity';
import { DaratVesselEntity } from '../../darat/entities/darat-vessels.entity';

@Module({
  imports: [
          TypeOrmModule.forFeature([VesselEntity, DaratVesselEntity])
        ],
  controllers: [VesselsApiController],
  providers: [VesselsApiService],
})
export class VesselsApiModule {}

