import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateLpiVesselInspectionDto } from './create-lpi-vessel-inspection.dto';

export class CreateLpiFormDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  formId: string;

  @IsNotEmpty()
  payload: string;
}
