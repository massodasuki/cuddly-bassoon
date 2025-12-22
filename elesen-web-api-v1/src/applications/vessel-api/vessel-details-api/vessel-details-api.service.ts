import { Injectable } from '@nestjs/common';
import { DaratVesselDetailsService as DaratVesselDetailsService } from './darat-vessel-details.service';
import { VesselDetailsService as MarinVesselDetailsService } from './vessel-details.service';
import { ProfilVeselDto, VesselDetailsResponseDto, VesselOwnershipCaptainResponseDto } from './dto/vessel-details-response.dto';

@Injectable()
export class VesselDetailsApiService {
  constructor(
    private readonly daratService: DaratVesselDetailsService,
    private readonly marinService: MarinVesselDetailsService,
  ) {}

  async findOne(registrationNo: string, jenist?: string): Promise<ProfilVeselDto> {
    if (jenist === 'darat') {
      return await this.daratService.findOne(registrationNo);
    } else if (jenist === 'marin') {
      return await this.marinService.findOne(registrationNo);
    } else {
      // Default behavior: try darat first, then marin
      try {
        return await this.daratService.findOne(registrationNo);
      } catch (error) {
        return await this.marinService.findOne(registrationNo);
      }
    }
  }

  async findAll(): Promise<VesselDetailsResponseDto> {
    // Use marin service for findAll, as darat doesn't have it
    return await this.marinService.findAll();
  }

  async getOwnershipAndCaptain(noVessel: string): Promise<VesselOwnershipCaptainResponseDto> {
    try {
      // Try darat service first
      return await this.daratService.getOwnershipAndCaptain(noVessel);
    } catch (error) {
      // If not found in darat, try marin
      return await this.marinService.getOwnershipAndCaptain(noVessel);
    }
  }
}