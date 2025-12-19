import { Module } from '@nestjs/common';
import { FullInspectionLpisService } from './full-inspection-lpis.service';
import { FullInspectionLpisController } from './full-inspection-lpis.controller';
import { FullInspectionLpisEntity } from './full-inspection-lpis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FullInspectionLpisEntity])],
  providers: [FullInspectionLpisService],
  controllers: [FullInspectionLpisController],
  exports: [FullInspectionLpisService],
})
export class FullInspectionLpisModule {}