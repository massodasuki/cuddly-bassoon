import { Controller, Get } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationListResponseDto } from './dto/application-list-response.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  async findAll(): Promise<ApplicationListResponseDto[]> {
    return this.applicationsService.findAll();
  }
}