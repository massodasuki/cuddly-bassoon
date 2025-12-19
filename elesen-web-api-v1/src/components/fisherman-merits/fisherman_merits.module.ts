import { Module } from '@nestjs/common';
import { FishermanMeritsService } from './fisherman_merits.service';
import { FishermanMeritsController } from './fisherman_merits.controller';
import { FishermanMeritsEntity } from './fisherman_merits.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FishermanMeritsEntity])],
  providers: [FishermanMeritsService],
  controllers: [FishermanMeritsController],
  exports: [FishermanMeritsService],
})
export class FishermanMeritsModule {}