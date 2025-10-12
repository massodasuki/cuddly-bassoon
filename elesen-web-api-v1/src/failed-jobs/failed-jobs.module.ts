import { Module } from '@nestjs/common';
import { FailedJobService } from './failed-jobs.service';
import { FailedJobEntityController } from './failed-jobs.controller';
import { FailedJobEntity } from './failed-jobs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FailedJobEntity])],
  providers: [FailedJobService],
  controllers: [FailedJobEntityController],
  exports: [FailedJobService],
})
export class FailedJobModule {}
