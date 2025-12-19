import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMeetingInvitationDto } from './create-mppi-vessel-meeting-invitation.dto';

export class UpdateMppiVesselMeetingInvitationDto extends PartialType(CreateMppiVesselMeetingInvitationDto) {}