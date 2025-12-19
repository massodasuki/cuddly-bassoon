import { Module } from '@nestjs/common';
import { ApplicationLegaciesService } from './application-legacies.service';
import { ApplicationLegaciesController } from './application-legacies.controller';
import { ApplicationLegaciesEntity } from './application-legacies.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationLegaciesEntity])],
  providers: [ApplicationLegaciesService],
  controllers: [ApplicationLegaciesController],
  exports: [ApplicationLegaciesService],
})
export class ApplicationLegaciesModule {}