import { Module } from '@nestjs/common';
import { ApplicationTasksService } from './application-tasks.service';
import { ApplicationTasksController } from './application-tasks.controller';
import { ApplicationTasksEntity } from './application-tasks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTasksEntity])],
  providers: [ApplicationTasksService],
  controllers: [ApplicationTasksController],
  exports: [ApplicationTasksService],
})
export class ApplicationTasksModule {}