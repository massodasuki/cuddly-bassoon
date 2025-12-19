import { Module } from '@nestjs/common';
import { Mesyuarat5004aService } from './mesyuarat_50_04a.service';
import { Mesyuarat5004aController } from './mesyuarat_50_04a.controller';
import { Mesyuarat5004aEntity } from './mesyuarat_50_04a.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Mesyuarat5004aEntity])],
  providers: [Mesyuarat5004aService],
  controllers: [Mesyuarat5004aController],
  exports: [Mesyuarat5004aService],
})
export class Mesyuarat5004aModule {}