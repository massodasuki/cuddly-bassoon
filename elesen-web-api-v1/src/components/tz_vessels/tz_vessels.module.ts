import { Module } from '@nestjs/common';
import { TzVesselsService } from './tz_vessels.service';
import { TzVesselsController } from './tz_vessels.controller';
import { TzVesselsEntity } from './tz_vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzVesselsEntity])],
  providers: [TzVesselsService],
  controllers: [TzVesselsController],
  exports: [TzVesselsService],
})
export class TzVesselsModule {}