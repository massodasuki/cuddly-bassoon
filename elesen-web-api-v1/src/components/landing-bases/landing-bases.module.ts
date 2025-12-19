import { Module } from '@nestjs/common';
import { LandingBasesService } from './landing-bases.service';
import { LandingBasesController } from './landing-bases.controller';
import { LandingBasesEntity } from './landing-bases.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingBasesEntity])],
  providers: [LandingBasesService],
  controllers: [LandingBasesController],
  exports: [LandingBasesService],
})
export class LandingBasesModule {}