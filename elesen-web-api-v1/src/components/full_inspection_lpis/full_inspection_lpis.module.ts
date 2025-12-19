import { Module } from '@nestjs/common';
import { FullInspectionLpisService } from './full_inspection_lpis.service';
import { FullInspectionLpisController } from './full_inspection_lpis.controller';
import { FullInspectionLpisEntity } from './full_inspection_lpis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FullInspectionLpisEntity])],
  providers: [FullInspectionLpisService],
  controllers: [FullInspectionLpisController],
  exports: [FullInspectionLpisService],
})
export class FullInspectionLpisModule {}