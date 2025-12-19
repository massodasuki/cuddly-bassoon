import { Module } from '@nestjs/common';
import { TzPermohonansService } from './tz-permohonans.service';
import { TzPermohonansController } from './tz-permohonans.controller';
import { TzPermohonansEntity } from './tz-permohonans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonansEntity])],
  providers: [TzPermohonansService],
  controllers: [TzPermohonansController],
  exports: [TzPermohonansService],
})
export class TzPermohonansModule {}