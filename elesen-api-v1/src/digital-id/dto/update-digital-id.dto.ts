import { PartialType } from '@nestjs/swagger';
import { CreateDigitalIdDto } from './create-digital-id.dto';

export class UpdateDigitalIdDto extends PartialType(CreateDigitalIdDto) {}
