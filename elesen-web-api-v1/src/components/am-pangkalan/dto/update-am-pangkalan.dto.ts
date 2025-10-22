import { PartialType } from '@nestjs/mapped-types';
import { CreateAmPangkalanDto } from './create-am-pangkalan.dto';

export class UpdateAmPangkalanDto extends PartialType(CreateAmPangkalanDto) {}