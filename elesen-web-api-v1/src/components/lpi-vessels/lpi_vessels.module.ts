import { Module } from '@nestjs/common';
import { LpiVesselsService } from './lpi_vessels.service';
import { LpiVesselsController } from './lpi_vessels.controller';
import { LpiVesselsEntity } from './lpi_vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiVesselsEntity])],
  providers: [LpiVesselsService],
  controllers: [LpiVesselsController],
  exports: [LpiVesselsService],
})
export class LpiVesselsModule {}