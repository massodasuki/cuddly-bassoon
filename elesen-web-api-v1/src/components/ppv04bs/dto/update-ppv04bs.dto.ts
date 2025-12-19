import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bsDto } from './create-ppv04bs.dto';

export class UpdatePpv04bsDto extends PartialType(CreatePpv04bsDto) {}