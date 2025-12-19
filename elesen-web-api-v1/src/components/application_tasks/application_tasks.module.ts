import { Module } from '@nestjs/common';
import { ApplicationTasksService } from './application_tasks.service';
import { ApplicationTasksController } from './application_tasks.controller';
import { ApplicationTasksEntity } from './application_tasks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTasksEntity])],
  providers: [ApplicationTasksService],
  controllers: [ApplicationTasksController],
  exports: [ApplicationTasksService],
})
export class ApplicationTasksModule {}