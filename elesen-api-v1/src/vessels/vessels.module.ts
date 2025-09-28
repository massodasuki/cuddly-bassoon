import { Module } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { VesselsController } from './vessels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vessels } from './entities/vessel.entity';
import { ProfilePentadbirHartas } from './entities/profile-pentadbir-hartas.entity';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
          TypeOrmModule.forFeature([Vessels, ProfilePentadbirHartas, VesselInspection])
        ],
  controllers: [VesselsController],
  providers: [VesselsService],
})
export class VesselsModule {}
