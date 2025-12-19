import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTasksDto } from './create-application-tasks.dto';

export class UpdateApplicationTasksDto extends PartialType(CreateApplicationTasksDto) {}