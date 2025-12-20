import { PartialType } from '@nestjs/mapped-types';
import { CreateCatchingLocationNdDto } from './create-catching-location-nd.dto';

export class UpdateCatchingLocationNdDto extends PartialType(CreateCatchingLocationNdDto) {}
