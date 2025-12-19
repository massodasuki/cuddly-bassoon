import { Module } from '@nestjs/common';
import { LpiEnginesService } from './lpi-engines.service';
import { LpiEnginesController } from './lpi-engines.controller';
import { LpiEnginesEntity } from './lpi-engines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiEnginesEntity])],
  providers: [LpiEnginesService],
  controllers: [LpiEnginesController],
  exports: [LpiEnginesService],
})
export class LpiEnginesModule {}