import { Module } from '@nestjs/common';
import { PpPt01ReviewsService } from './pp-pt-01-reviews.service';
import { PpPt01ReviewsController } from './pp-pt-01-reviews.controller';
import { PpPt01ReviewsEntity } from './pp-pt-01-reviews.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPt01ReviewsEntity])],
  providers: [PpPt01ReviewsService],
  controllers: [PpPt01ReviewsController],
  exports: [PpPt01ReviewsService],
})
export class PpPt01ReviewsModule {}