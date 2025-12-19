import { ApiProperty } from '@nestjs/swagger';

export class CombinedVesselDto {
  @ApiProperty({ description: 'Unique identifier for the vessel' })
  id: string;

  @ApiProperty({ description: 'Type of vessel: regular or darat-vessel', enum: ['regular', 'darat'] })
  vessel_type: string;

  @ApiProperty({ description: 'Vessel registration number', required: false })
  registration_number?: string;

  @ApiProperty({ description: 'Vessel number', required: false })
  vessel_no?: string;

  @ApiProperty({ description: 'Zone information', required: false })
  zone?: string;

  @ApiProperty({ description: 'Length of vessel', required: false })
  length?: number;

  @ApiProperty({ description: 'Width of vessel', required: false })
  width?: number;

  @ApiProperty({ description: 'Depth of vessel', required: false })
  depth?: number;

  @ApiProperty({ description: 'Gross tonnage', required: false })
  grt?: number;

  @ApiProperty({ description: 'Main equipment', required: false })
  peralatan_utama?: string;

  @ApiProperty({ description: 'State/Region', required: false })
  negeri?: string;

  @ApiProperty({ description: 'District/Area', required: false })
  daerah?: string;

  @ApiProperty({ description: 'Base/Harbor', required: false })
  pangkalan?: string;

  @ApiProperty({ description: 'Number of engines', required: false })
  bil_enjin?: number;

  @ApiProperty({ description: 'Vessel category', required: false })
  kategori_vessel?: string;

  @ApiProperty({ description: 'License start date', required: false })
  license_start?: Date;

  @ApiProperty({ description: 'License end date', required: false })
  license_end?: Date;

  @ApiProperty({ description: 'Transportation type (for darat vessels)', required: false })
  transportation?: string;

  @ApiProperty({ description: 'Whether vessel is owned', required: false })
  own_vessel?: number;

  @ApiProperty({ description: 'Whether vessel is approved', required: false })
  is_approved?: number;

  @ApiProperty({ description: 'Whether vessel is active', required: false })
  is_active?: number;

  @ApiProperty({ description: 'User ID associated with vessel', required: false })
  user_id?: string;

  @ApiProperty({ description: 'Creation date', required: false })
  created_at?: Date;

  @ApiProperty({ description: 'Last update date', required: false })
  updated_at?: Date;
}

export class CombinedVesselResponseDto {
  @ApiProperty({ description: 'Array of combined vessel data', type: [CombinedVesselDto] })
  data: CombinedVesselDto[];

  @ApiProperty({ description: 'Total count of vessels', example: 100 })
  total: number;

  @ApiProperty({ description: 'Current page number', example: 1 })
  page: number;

  @ApiProperty({ description: 'Number of items per page', example: 10 })
  pageSize: number;

  @ApiProperty({ description: 'Total number of pages', example: 10 })
  totalPages: number;

  @ApiProperty({ description: 'Count of regular vessels', example: 80 })
  regular_vessel_count: number;

  @ApiProperty({ description: 'Count of darat vessels', example: 20 })
  darat_vessel_count: number;
}

export class VesselListingQueryDto {
  @ApiProperty({ description: 'Page number for pagination', required: false, default: 1 })
  page?: number;

  @ApiProperty({ description: 'Number of items per page', required: false, default: 10 })
  limit?: number;

  @ApiProperty({ description: 'Filter by vessel type', required: false, enum: ['regular', 'darat', 'all'] })
  vessel_type?: string;

  @ApiProperty({ description: 'Search by registration number or vessel number', required: false })
  search?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  is_active?: number;
}