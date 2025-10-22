import { Module } from '@nestjs/common';
import { ComplaintService } from './complaints.service';
import { ComplaintEntityController } from './complaints.controller';
import { ComplaintEntity } from './complaints.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComplaintEntity])],
  providers: [ComplaintService],
  controllers: [ComplaintEntityController],
  exports: [ComplaintService],
})
export class ComplaintModule {}
