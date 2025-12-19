import { Module } from '@nestjs/common';
import { CauseLetterWorkflowsService } from './cause_letter_workflows.service';
import { CauseLetterWorkflowsController } from './cause_letter_workflows.controller';
import { CauseLetterWorkflowsEntity } from './cause_letter_workflows.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLetterWorkflowsEntity])],
  providers: [CauseLetterWorkflowsService],
  controllers: [CauseLetterWorkflowsController],
  exports: [CauseLetterWorkflowsService],
})
export class CauseLetterWorkflowsModule {}