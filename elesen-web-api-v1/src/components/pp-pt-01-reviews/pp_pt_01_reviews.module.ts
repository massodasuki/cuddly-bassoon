import { Module } from '@nestjs/common';
import { PpPt01ReviewsService } from './pp_pt_01_reviews.service';
import { PpPt01ReviewsController } from './pp_pt_01_reviews.controller';
import { PpPt01ReviewsEntity } from './pp_pt_01_reviews.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPt01ReviewsEntity])],
  providers: [PpPt01ReviewsService],
  controllers: [PpPt01ReviewsController],
  exports: [PpPt01ReviewsService],
})
export class PpPt01ReviewsModule {}