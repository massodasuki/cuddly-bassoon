import { Module } from '@nestjs/common';
import { TzPermohonansService } from './tz_permohonans.service';
import { TzPermohonansController } from './tz_permohonans.controller';
import { TzPermohonansEntity } from './tz_permohonans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonansEntity])],
  providers: [TzPermohonansService],
  controllers: [TzPermohonansController],
  exports: [TzPermohonansService],
})
export class TzPermohonansModule {}