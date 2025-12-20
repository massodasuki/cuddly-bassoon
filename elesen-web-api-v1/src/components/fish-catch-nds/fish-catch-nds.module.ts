import { Module } from '@nestjs/common';
import { FishCatchNdService } from './fish-catch-nds.service';
import { FishCatchNdEntityController } from './fish-catch-nds.controller';
import { FishCatchNdEntity } from './fish-catch-nds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FishCatchNdEntity])],
  providers: [FishCatchNdService],
  controllers: [FishCatchNdEntityController],
  exports: [FishCatchNdService],
})
export class FishCatchNdModule {}

