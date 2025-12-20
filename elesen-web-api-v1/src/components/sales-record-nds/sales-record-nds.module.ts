import { Module } from '@nestjs/common';
import { SalesRecordNdService } from './sales-record-nds.service';
import { SalesRecordNdEntityController } from './sales-record-nds.controller';
import { SalesRecordNdEntity } from './sales-record-nds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SalesRecordNdEntity])],
  providers: [SalesRecordNdService],
  controllers: [SalesRecordNdEntityController],
  exports: [SalesRecordNdService],
})
export class SalesRecordNdModule {}

