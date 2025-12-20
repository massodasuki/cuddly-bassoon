import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationEshNdDto } from './create-application-esh-nd.dto';

export class UpdateApplicationEshNdDto extends PartialType(CreateApplicationEshNdDto) {}
