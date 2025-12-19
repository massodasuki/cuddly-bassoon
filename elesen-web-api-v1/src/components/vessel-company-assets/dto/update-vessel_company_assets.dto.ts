import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselCompanyAssetsDto } from './create-vessel_company_assets.dto';

export class UpdateVesselCompanyAssetsDto extends PartialType(CreateVesselCompanyAssetsDto) {}