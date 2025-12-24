import { InspectionApplicationListResponseDto } from './inspection-application-list-response.dto';

export class PaginatedInspectionApplicationListResponseDto {
  data: InspectionApplicationListResponseDto[];
  total: number;
  page: number;
  limit: number;
}