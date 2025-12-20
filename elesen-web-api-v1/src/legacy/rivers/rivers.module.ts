import { Module } from '@nestjs/common';
import { RiverService } from './rivers.service';
import { RiverEntityController } from './rivers.controller';
import { RiverEntity } from './rivers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RiverEntity])],
  providers: [RiverService],
  controllers: [RiverEntityController],
  exports: [RiverService],
})
export class RiverModule {}

