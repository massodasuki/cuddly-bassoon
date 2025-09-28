import { PartialType } from '@nestjs/swagger';
import { CreatePengkalanDto } from './create-pengkalan.dto';

export class UpdatePengkalanDto extends PartialType(CreatePengkalanDto) {}