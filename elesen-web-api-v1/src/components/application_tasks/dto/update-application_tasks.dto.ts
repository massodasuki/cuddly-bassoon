import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTasksDto } from './create-application_tasks.dto';

export class UpdateApplicationTasksDto extends PartialType(CreateApplicationTasksDto) {}