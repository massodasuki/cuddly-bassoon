import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMeetingInvitationDto } from './create-mppi_vessel_meeting_invitation.dto';

export class UpdateMppiVesselMeetingInvitationDto extends PartialType(CreateMppiVesselMeetingInvitationDto) {}