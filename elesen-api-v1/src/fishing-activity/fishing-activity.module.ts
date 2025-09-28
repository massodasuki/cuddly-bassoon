import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishingActivityService } from './fishing-activity.service';
import { FishingActivityController } from './fishing-activity.controller';
import { FishingActivity } from './entities/fishing-activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FishingActivity])],
  controllers: [FishingActivityController],
  providers: [FishingActivityService],
})
export class FishingActivityModule {}