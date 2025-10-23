import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VesselDetailsService } from './vessel-details.service';
import { ProfilVeselDto, VesselDetailsResponseDto } from './dto/vessel-details-response.dto';

@ApiTags('Vessel Details')
@Controller('/api/v1/applications/vessel-details')
export class VesselDetailsController {
  constructor(private readonly vesselDetailsService: VesselDetailsService) {}

  @Get()
  async findAll(): Promise<VesselDetailsResponseDto> {
    return this.vesselDetailsService.findAll();
  }

  @Get(':noVesel')
  async findOne(@Param('noVesel') noVesel: string) {
    const data = await this.vesselDetailsService.findOne(noVesel);
    if (!data) {
      throw new NotFoundException(`Vessel with no_pendaftaran ${noVesel} not found`);
    }
    return { data };
  }
}