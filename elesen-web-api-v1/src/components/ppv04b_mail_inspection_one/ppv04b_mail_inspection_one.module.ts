import { Module } from '@nestjs/common';
import { Ppv04bMailInspectionOneService } from './ppv04b_mail_inspection_one.service';
import { Ppv04bMailInspectionOneController } from './ppv04b_mail_inspection_one.controller';
import { Ppv04bMailInspectionOneEntity } from './ppv04b_mail_inspection_one.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bMailInspectionOneEntity])],
  providers: [Ppv04bMailInspectionOneService],
  controllers: [Ppv04bMailInspectionOneController],
  exports: [Ppv04bMailInspectionOneService],
})
export class Ppv04bMailInspectionOneModule {}