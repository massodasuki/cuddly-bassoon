import { PartialType } from '@nestjs/swagger';
import { CreateDeviceRegistrationDto } from './create-device-registration.dto';

export class UpdateDeviceRegistrationDto extends PartialType(CreateDeviceRegistrationDto) {}
