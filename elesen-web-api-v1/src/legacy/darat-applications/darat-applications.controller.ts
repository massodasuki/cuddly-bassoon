import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { DaratApplicationsService } from './darat-applications.service';
import { DaratApplicationResponseDto } from './dto/darat-application-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@ApiTags('Darat Applications')
@Controller('/api/v1/applications')
export class DaratApplicationsController {
  constructor(private readonly daratApplicationsService: DaratApplicationsService) {}

  @Get('darat-applications-minimal')
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async findAll(@Query() query: PaginationQueryDto) {
    return this.daratApplicationsService.findAll(query);
  }

  @Get('darat-applications/:id')
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async findOne(id: string, @Query() query: PaginationQueryDto) {
    return this.daratApplicationsService.findOne(id, query);
  }
}
