import { Module } from '@nestjs/common';
import { RefCauseLetterWorkflowsService } from './ref-cause-letter-workflows.service';
import { RefCauseLetterWorkflowsController } from './ref-cause-letter-workflows.controller';
import { RefCauseLetterWorkflowsEntity } from './ref-cause-letter-workflows.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RefCauseLetterWorkflowsEntity])],
  providers: [RefCauseLetterWorkflowsService],
  controllers: [RefCauseLetterWorkflowsController],
  exports: [RefCauseLetterWorkflowsService],
})
export class RefCauseLetterWorkflowsModule {}