import { Module } from '@nestjs/common';
import { DaratFaultRecordService } from './darat-fault-records.service';
import { DaratFaultRecordEntityController } from './darat-fault-records.controller';
import { DaratFaultRecordEntity } from './darat-fault-records.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratFaultRecordEntity])],
  providers: [DaratFaultRecordService],
  controllers: [DaratFaultRecordEntityController],
  exports: [DaratFaultRecordService],
})
export class DaratFaultRecordModule {}
