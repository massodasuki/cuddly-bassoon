import { Module } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { VesselsController } from './vessels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselEntity } from '../common/entities';

@Module({
  imports: [
          TypeOrmModule.forFeature([VesselEntity])
        ],
  controllers: [VesselsController],
  providers: [VesselsService],
})
export class VesselsModule {}
