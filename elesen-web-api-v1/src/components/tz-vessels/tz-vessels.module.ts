import { Module } from '@nestjs/common';
import { TzVesselsService } from './tz-vessels.service';
import { TzVesselsController } from './tz-vessels.controller';
import { TzVesselsEntity } from './tz-vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzVesselsEntity])],
  providers: [TzVesselsService],
  controllers: [TzVesselsController],
  exports: [TzVesselsService],
})
export class TzVesselsModule {}