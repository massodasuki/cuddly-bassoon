import { Module } from '@nestjs/common';
import { VesselsApiService } from './vessels-api.service';
import { VesselsApiController } from './vessels-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselEntity } from '../../marin/entities/vessel.entity';
import { DaratVesselEntity } from '../../darat/entities/darat-vessels.entity';
import { UserEntity } from '../../users/users/entities/user.entity';

@Module({
  imports: [
          TypeOrmModule.forFeature([VesselEntity, DaratVesselEntity, UserEntity])
        ],
  controllers: [VesselsApiController],
  providers: [VesselsApiService],
})
export class VesselsApiModule {}

