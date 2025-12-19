import { Module } from '@nestjs/common';
import { MppiVesselMeetingInvitationService } from './mppi_vessel_meeting_invitation.service';
import { MppiVesselMeetingInvitationController } from './mppi_vessel_meeting_invitation.controller';
import { MppiVesselMeetingInvitationEntity } from './mppi_vessel_meeting_invitation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMeetingInvitationEntity])],
  providers: [MppiVesselMeetingInvitationService],
  controllers: [MppiVesselMeetingInvitationController],
  exports: [MppiVesselMeetingInvitationService],
})
export class MppiVesselMeetingInvitationModule {}