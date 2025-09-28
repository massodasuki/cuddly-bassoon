import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';

@Module({
  imports: [
        TypeOrmModule.forFeature([VesselInspection])
      ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
