import { Module } from '@nestjs/common';
import { Ppv04bApplyDateHobOneService } from './ppv04b_apply_date_hob_one.service';
import { Ppv04bApplyDateHobOneController } from './ppv04b_apply_date_hob_one.controller';
import { Ppv04bApplyDateHobOneEntity } from './ppv04b_apply_date_hob_one.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bApplyDateHobOneEntity])],
  providers: [Ppv04bApplyDateHobOneService],
  controllers: [Ppv04bApplyDateHobOneController],
  exports: [Ppv04bApplyDateHobOneService],
})
export class Ppv04bApplyDateHobOneModule {}