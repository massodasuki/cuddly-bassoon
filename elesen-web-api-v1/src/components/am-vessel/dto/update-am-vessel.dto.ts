import { PartialType } from '@nestjs/mapped-types';
import { CreateAmVesselDto } from './create-am-vessel.dto';

export class UpdateAmVesselDto extends PartialType(CreateAmVesselDto) {}
