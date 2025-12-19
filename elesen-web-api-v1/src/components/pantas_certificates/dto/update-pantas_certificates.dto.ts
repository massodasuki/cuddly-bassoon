import { PartialType } from '@nestjs/mapped-types';
import { CreatePantasCertificatesDto } from './create-pantas_certificates.dto';

export class UpdatePantasCertificatesDto extends PartialType(CreatePantasCertificatesDto) {}