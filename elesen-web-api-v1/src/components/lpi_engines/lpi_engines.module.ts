import { Module } from '@nestjs/common';
import { LpiEnginesService } from './lpi_engines.service';
import { LpiEnginesController } from './lpi_engines.controller';
import { LpiEnginesEntity } from './lpi_engines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiEnginesEntity])],
  providers: [LpiEnginesService],
  controllers: [LpiEnginesController],
  exports: [LpiEnginesService],
})
export class LpiEnginesModule {}