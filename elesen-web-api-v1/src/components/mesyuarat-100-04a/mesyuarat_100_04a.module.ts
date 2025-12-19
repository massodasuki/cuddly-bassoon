import { Module } from '@nestjs/common';
import { Mesyuarat10004aService } from './mesyuarat_100_04a.service';
import { Mesyuarat10004aController } from './mesyuarat_100_04a.controller';
import { Mesyuarat10004aEntity } from './mesyuarat_100_04a.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Mesyuarat10004aEntity])],
  providers: [Mesyuarat10004aService],
  controllers: [Mesyuarat10004aController],
  exports: [Mesyuarat10004aService],
})
export class Mesyuarat10004aModule {}