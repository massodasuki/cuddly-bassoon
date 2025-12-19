import { Module } from '@nestjs/common';
import { CauseLetterWorkflowsService } from './cause-letter-workflows.service';
import { CauseLetterWorkflowsController } from './cause-letter-workflows.controller';
import { CauseLetterWorkflowsEntity } from './cause-letter-workflows.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLetterWorkflowsEntity])],
  providers: [CauseLetterWorkflowsService],
  controllers: [CauseLetterWorkflowsController],
  exports: [CauseLetterWorkflowsService],
})
export class CauseLetterWorkflowsModule {}