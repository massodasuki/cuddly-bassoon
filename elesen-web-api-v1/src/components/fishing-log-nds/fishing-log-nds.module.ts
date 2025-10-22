import { Module } from '@nestjs/common';
import { FishingLogNdService } from './fishing-log-nds.service';
import { FishingLogNdEntityController } from './fishing-log-nds.controller';
import { FishingLogNdEntity } from './fishing-log-nds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FishingLogNdEntity])],
  providers: [FishingLogNdService],
  controllers: [FishingLogNdEntityController],
  exports: [FishingLogNdService],
})
export class FishingLogNdModule {}
