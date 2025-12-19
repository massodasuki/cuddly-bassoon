import { Module } from '@nestjs/common';
import { Ppv04aVesselKickoffService } from './ppv04a-vessel-kickoff.service';
import { Ppv04aVesselKickoffController } from './ppv04a-vessel-kickoff.controller';
import { Ppv04aVesselKickoffEntity } from './ppv04a-vessel-kickoff.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselKickoffEntity])],
  providers: [Ppv04aVesselKickoffService],
  controllers: [Ppv04aVesselKickoffController],
  exports: [Ppv04aVesselKickoffService],
})
export class Ppv04aVesselKickoffModule {}