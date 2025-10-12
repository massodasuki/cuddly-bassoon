import { Module } from '@nestjs/common';
import { ComplaintLogService } from './complaint-logs.service';
import { ComplaintLogEntityController } from './complaint-logs.controller';
import { ComplaintLogEntity } from './complaint-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComplaintLogEntity])],
  providers: [ComplaintLogService],
  controllers: [ComplaintLogEntityController],
  exports: [ComplaintLogService],
})
export class ComplaintLogModule {}
