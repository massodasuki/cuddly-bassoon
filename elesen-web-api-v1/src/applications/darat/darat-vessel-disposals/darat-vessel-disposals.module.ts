import { Module } from '@nestjs/common';
import { DaratVesselDisposalService } from './darat-vessel-disposals.service';
import { DaratVesselDisposalEntityController } from './darat-vessel-disposals.controller';
import { DaratVesselDisposalEntity } from './darat-vessel-disposals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVesselDisposalEntity])],
  providers: [DaratVesselDisposalService],
  controllers: [DaratVesselDisposalEntityController],
  exports: [DaratVesselDisposalService],
})
export class DaratVesselDisposalModule {}
