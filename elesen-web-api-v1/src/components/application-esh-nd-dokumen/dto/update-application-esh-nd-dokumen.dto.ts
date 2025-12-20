import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationEshNdDokumenDto } from './create-application-esh-nd-dokumen.dto';

export class UpdateApplicationEshNdDokumenDto extends PartialType(CreateApplicationEshNdDokumenDto) {}
