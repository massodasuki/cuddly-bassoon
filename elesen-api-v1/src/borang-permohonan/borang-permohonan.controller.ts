import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { BorangPermohonanService } from './borang-permohonan.service';
import { BorangPermohonanResponseDto } from './dto/borang-permohonan-response.dto';

@ApiTags('Borang Permohonan')
@Controller('api/borang')
export class BorangPermohonanController {
  constructor(private readonly borangPermohonanService: BorangPermohonanService) {}

  @Get()
  @ApiOperation({
    summary: 'Get Borang Permohonan list',
    description: 'Retrieve a paginated list of borang permohonan records, sorted by inspection date (oldest first)'
  })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, description: 'Number of items per page (default: 5)' })
  @ApiResponse({ status: 200, type: BorangPermohonanResponseDto, description: 'Successful response with paginated data' })
  async getBorangPermohonan(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 5,
  ): Promise<BorangPermohonanResponseDto> {
    return this.borangPermohonanService.getBorangPermohonan(page, pageSize);
  }
}