import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceRegistrationDto } from './create-device_registration.dto';

export class UpdateDeviceRegistrationDto extends PartialType(CreateDeviceRegistrationDto) {}