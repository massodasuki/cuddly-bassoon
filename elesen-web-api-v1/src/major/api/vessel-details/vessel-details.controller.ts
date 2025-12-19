import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ApiTags('Vessel Details')
@Controller('/api/v1/applications')
export class VesselDetailsController {
  constructor(private readonly vesselDetailsService: VesselDetailsService) {}

  @Get('vessel-details')
  async findAll(): Promise<VesselDetailsResponseDto> {
    return this.vesselDetailsService.findAll();
  }

  @Get('/vessel-details/:noVesel')
  async findOne(@Param('noVesel') noVesel: string) {
    const data = await this.vesselDetailsService.findOne(noVesel);
    if (!data) {
      throw new NotFoundException(`Vessel with no_pendaftaran ${noVesel} not found`);
    }
    return { data };
  }

  @Get('/vessel-details-owner/:noVesel')
  async getOwnershipAndCaptain(@Param('noVesel') noVesel: string): Promise<VesselOwnershipCaptainResponseDto> {
    const data = await this.vesselDetailsService.getOwnershipAndCaptain(noVesel);
    if (!data) {
      throw new NotFoundException(`Vessel with no_pendaftaran ${noVesel} not found`);
    }
    return data;
  }
}