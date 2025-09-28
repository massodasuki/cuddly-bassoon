import { VesselInspection } from "src/shared/entities/vessel-inspection.entity";

export class CombinedLpiResponseDto {
  id: string;
  user: string;
  createdAt?: Date;
  images: {
    id: string;
    filename: string;
    path: string;
  }[];
  vesselInspection: VesselInspection;
}
