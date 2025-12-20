import { Module } from '@nestjs/common';
import { FishLandingNdService } from './fish-landing-nds.service';
import { FishLandingNdEntityController } from './fish-landing-nds.controller';
import { FishLandingNdEntity } from './fish-landing-nds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FishLandingNdEntity])],
  providers: [FishLandingNdService],
  controllers: [FishLandingNdEntityController],
  exports: [FishLandingNdService],
})
export class FishLandingNdModule {}

