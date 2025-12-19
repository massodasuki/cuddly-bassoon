import { Module } from '@nestjs/common';
import { VesselApplicationReviewService } from './vessel-application-review.service';
import { VesselApplicationReviewController } from './vessel-application-review.controller';
import { VesselApplicationReviewEntity } from './vessel-application-review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselApplicationReviewEntity])],
  providers: [VesselApplicationReviewService],
  controllers: [VesselApplicationReviewController],
  exports: [VesselApplicationReviewService],
})
export class VesselApplicationReviewModule {}