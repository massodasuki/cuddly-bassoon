import { Module } from '@nestjs/common';
import { LpiVesselsService } from './lpi-vessels.service';
import { LpiVesselsController } from './lpi-vessels.controller';
import { LpiVesselsEntity } from './lpi-vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiVesselsEntity])],
  providers: [LpiVesselsService],
  controllers: [LpiVesselsController],
  exports: [LpiVesselsService],
})
export class LpiVesselsModule {}