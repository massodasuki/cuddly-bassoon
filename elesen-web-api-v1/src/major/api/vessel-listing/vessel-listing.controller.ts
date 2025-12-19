import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { VesselListingService } from './vessel-listing.service';
import { CombinedVesselResponseDto, VesselListingQueryDto } from './dto/combined-vessel.dto';

@ApiTags('Vessel Listing')
@Controller('api/v1/vessels')
export class VesselListingController {
  constructor(private readonly vesselListingService: VesselListingService) {}

  @Get('combined')
  @ApiOperation({ 
    summary: 'Get combined list of all vessels and darat-vessels',
    description: 'Returns a unified list of both regular vessels and darat vessels with pagination, filtering, and search capabilities'
  })
  @ApiQuery({ name: 'page', required: false, description: 'Page number for pagination', type: Number })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of items per page', type: Number })
  @ApiQuery({ name: 'vessel_type', required: false, description: 'Filter by vessel type', enum: ['all', 'regular', 'darat'] })
  @ApiQuery({ name: 'search', required: false, description: 'Search term for registration number or vessel details', type: String })
  @ApiQuery({ name: 'is_active', required: false, description: 'Filter by active status', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Successfully retrieved combined vessel list',
    type: CombinedVesselResponseDto 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Bad request with invalid parameters' 
  })
  async findAllCombinedVessels(@Query() query: VesselListingQueryDto): Promise<CombinedVesselResponseDto> {
    return this.vesselListingService.findAllCombinedVessels(query);
  }

  @Get('statistics')
  @ApiOperation({ 
    summary: 'Get vessel statistics',
    description: 'Returns statistics about all vessels including counts by type and status'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Successfully retrieved vessel statistics',
    schema: {
      type: 'object',
      properties: {
        total_vessels: { type: 'number', description: 'Total number of vessels' },
        regular_vessels: { type: 'number', description: 'Number of regular vessels' },
        darat_vessels: { type: 'number', description: 'Number of darat vessels' },
        active_vessels: { type: 'number', description: 'Number of active vessels' },
        inactive_vessels: { type: 'number', description: 'Number of inactive vessels' }
      }
    }
  })
  async getVesselStatistics() {
    return this.vesselListingService.getVesselStatistics();
  }
}