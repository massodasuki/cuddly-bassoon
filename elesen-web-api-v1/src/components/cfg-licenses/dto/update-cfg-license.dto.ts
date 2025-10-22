import { PartialType } from '@nestjs/mapped-types';
import { CreateCfgLicenseDto } from './create-cfg-license.dto';

export class UpdateCfgLicenseDto extends PartialType(CreateCfgLicenseDto) {}