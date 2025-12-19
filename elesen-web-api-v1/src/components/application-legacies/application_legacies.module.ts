import { Module } from '@nestjs/common';
import { ApplicationLegaciesService } from './application_legacies.service';
import { ApplicationLegaciesController } from './application_legacies.controller';
import { ApplicationLegaciesEntity } from './application_legacies.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationLegaciesEntity])],
  providers: [ApplicationLegaciesService],
  controllers: [ApplicationLegaciesController],
  exports: [ApplicationLegaciesService],
})
export class ApplicationLegaciesModule {}