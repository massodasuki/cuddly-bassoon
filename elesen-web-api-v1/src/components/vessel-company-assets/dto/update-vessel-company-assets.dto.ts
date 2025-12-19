import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselCompanyAssetsDto } from './create-vessel-company-assets.dto';

export class UpdateVesselCompanyAssetsDto extends PartialType(CreateVesselCompanyAssetsDto) {}