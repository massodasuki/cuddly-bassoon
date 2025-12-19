import { Module } from '@nestjs/common';
import { LandingBasesService } from './landing_bases.service';
import { LandingBasesController } from './landing_bases.controller';
import { LandingBasesEntity } from './landing_bases.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingBasesEntity])],
  providers: [LandingBasesService],
  controllers: [LandingBasesController],
  exports: [LandingBasesService],
})
export class LandingBasesModule {}