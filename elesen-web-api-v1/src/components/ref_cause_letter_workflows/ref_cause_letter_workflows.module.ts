import { Module } from '@nestjs/common';
import { RefCauseLetterWorkflowsService } from './ref_cause_letter_workflows.service';
import { RefCauseLetterWorkflowsController } from './ref_cause_letter_workflows.controller';
import { RefCauseLetterWorkflowsEntity } from './ref_cause_letter_workflows.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RefCauseLetterWorkflowsEntity])],
  providers: [RefCauseLetterWorkflowsService],
  controllers: [RefCauseLetterWorkflowsController],
  exports: [RefCauseLetterWorkflowsService],
})
export class RefCauseLetterWorkflowsModule {}