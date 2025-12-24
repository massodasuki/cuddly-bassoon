import { Controller, Get, Query } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationListResponseDto } from './dto/application-list-response.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
@ApiTags('Darat Applications')
@Controller('/api/v1/applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

//   @Get()
//   async findAll(): Promise<ApplicationListResponseDto[]> {
//     return this.applicationsService.findAll();
//   }

  @Get('darat-applications-minimal')
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    @ApiQuery({ name: 'marin', required: false, type: [String] })
    async findAll(@Query() query: PaginationQueryDto) {
      return this.applicationsService.findAll(query);
    }
  
    @Get('applications/:id')
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    async findOne(id: string, @Query() query: PaginationQueryDto) {
      return this.applicationsService.findOne(id, query);
    }
}