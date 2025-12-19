import { Module } from '@nestjs/common';
import { VesselApplicationReviewService } from './vessel_application_review.service';
import { VesselApplicationReviewController } from './vessel_application_review.controller';
import { VesselApplicationReviewEntity } from './vessel_application_review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselApplicationReviewEntity])],
  providers: [VesselApplicationReviewService],
  controllers: [VesselApplicationReviewController],
  exports: [VesselApplicationReviewService],
})
export class VesselApplicationReviewModule {}