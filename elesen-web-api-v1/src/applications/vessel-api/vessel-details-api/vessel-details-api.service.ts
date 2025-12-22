import { Injectable } from '@nestjs/common';
import { VesselDetailsService as DaratVesselDetailsService } from '../vessel-details/darat-vessel-details.service';
import { VesselDetailsService as MarinVesselDetailsService } from '../vessel-details/vessel-details.service';
import { ProfilVeselDto, VesselDetailsResponseDto, VesselOwnershipCaptainResponseDto } from '../vessel-details/dto/vessel-details-response.dto';

@Injectable()
export class VesselDetailsApiService {
  constructor(
    private readonly daratService: DaratVesselDetailsService,
    private readonly marinService: MarinVesselDetailsService,
  ) {}

  async findOne(registrationNo: string): Promise<ProfilVeselDto> {
    try {
      // Try darat service first
      return await this.daratService.findOne(registrationNo);
    } catch (error) {
      // If not found in darat, try marin
      return await this.marinService.findOne(registrationNo);
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