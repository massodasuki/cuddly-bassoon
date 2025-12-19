import { Module } from '@nestjs/common';
import { MppiVesselMeetingInvitationService } from './mppi-vessel-meeting-invitation.service';
import { MppiVesselMeetingInvitationController } from './mppi-vessel-meeting-invitation.controller';
import { MppiVesselMeetingInvitationEntity } from './mppi-vessel-meeting-invitation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMeetingInvitationEntity])],
  providers: [MppiVesselMeetingInvitationService],
  controllers: [MppiVesselMeetingInvitationController],
  exports: [MppiVesselMeetingInvitationService],
})
export class MppiVesselMeetingInvitationModule {}