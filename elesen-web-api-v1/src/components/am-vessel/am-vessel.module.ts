import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmVesselService } from './am-vessel.service';
import { AmVesselController } from './am-vessel.controller';
import { AmVessel } from './am-vessel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AmVessel])],
  controllers: [AmVesselController],
  providers: [AmVesselService],
  exports: [AmVesselService],
})
export class AmVesselModule {}