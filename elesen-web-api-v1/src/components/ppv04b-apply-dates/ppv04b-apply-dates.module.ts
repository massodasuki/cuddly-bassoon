import { Module } from '@nestjs/common';
import { Ppv04bApplyDatesService } from './ppv04b-apply-dates.service';
import { Ppv04bApplyDatesController } from './ppv04b-apply-dates.controller';
import { Ppv04bApplyDatesEntity } from './ppv04b-apply-dates.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bApplyDatesEntity])],
  providers: [Ppv04bApplyDatesService],
  controllers: [Ppv04bApplyDatesController],
  exports: [Ppv04bApplyDatesService],
})
export class Ppv04bApplyDatesModule {}