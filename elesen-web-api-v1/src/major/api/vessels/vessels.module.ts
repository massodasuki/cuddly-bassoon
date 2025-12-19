import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselEntity } from '../common/entities/vessels.entity';
import { VesselsController } from './vessels.controller';
import { VesselsService } from './vessels.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VesselEntity])
  ],
  controllers: [VesselsController],
  providers: [VesselsService],
})
export class VesselsModule {}
