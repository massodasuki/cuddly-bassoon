import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VesselDetailsApiService } from './vessel-details-api.service';
import { ProfilVeselDto, VesselDetailsResponseDto, VesselOwnershipCaptainResponseDto } from './dto/vessel-details-response.dto';

@ApiTags('Vessel Details API')
@Controller('/api/v1/applications')
export class VesselDetailsApiController {
  constructor(private readonly vesselDetailsApiService: VesselDetailsApiService) {}

  @Get('vessel-details')
  async findAll(): Promise<VesselDetailsResponseDto> {
    return this.vesselDetailsApiService.findAll();
  }

  @Get('/vessel-details/:registrationNo')
  async findOne(@Param('registrationNo') registrationNo: string, @Query('jenis') jenis?: string) {
    const data = await this.vesselDetailsApiService.findOne(registrationNo, jenis);
    if (!data) {
      throw new NotFoundException(`Vessel with registration number ${registrationNo} not found`);
    }
    return { data };
  }

  @Get('/vessel-details-owner/:noVessel')
  async getOwnershipAndCaptain(@Param('noVessel') noVessel: string): Promise<VesselOwnershipCaptainResponseDto> {
    const data = await this.vesselDetailsApiService.getOwnershipAndCaptain(noVessel);
    if (!data) {
      throw new NotFoundException(`Vessel with no_pendaftaran ${noVessel} not found`);
    }
    return data;
  }
}