import { PartialType } from '@nestjs/mapped-types';
import { CreatePantasCertificatesDto } from './create-pantas-certificates.dto';

export class UpdatePantasCertificatesDto extends PartialType(CreatePantasCertificatesDto) {}