import { Module } from '@nestjs/common';
import { LandingInfoService } from './landing-infos.service';
import { LandingInfoEntityController } from './landing-infos.controller';
import { LandingInfoEntity } from './landing-infos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingInfoEntity])],
  providers: [LandingInfoService],
  controllers: [LandingInfoEntityController],
  exports: [LandingInfoService],
})
export class LandingInfoModule {}

