import { Module } from '@nestjs/common';
import { Ppv04bMailInspectionOneService } from './ppv04b-mail-inspection-one.service';
import { Ppv04bMailInspectionOneController } from './ppv04b-mail-inspection-one.controller';
import { Ppv04bMailInspectionOneEntity } from './ppv04b-mail-inspection-one.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bMailInspectionOneEntity])],
  providers: [Ppv04bMailInspectionOneService],
  controllers: [Ppv04bMailInspectionOneController],
  exports: [Ppv04bMailInspectionOneService],
})
export class Ppv04bMailInspectionOneModule {}