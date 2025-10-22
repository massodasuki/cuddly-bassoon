import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VesselDetailsService } from './vessel-details.service';
import { VesselDetailsResponseDto } from './dto/vessel-details-response.dto';

@ApiTags('Vessel Details')
@Controller('api/v1/vessel-details')
export class VesselDetailsController {
  constructor(private readonly vesselDetailsService: VesselDetailsService) {}

  @Get()
  async findAll(): Promise<VesselDetailsResponseDto> {
    return this.vesselDetailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VesselDetailsResponseDto> {
    return this.vesselDetailsService.findOne(id);
  }
}