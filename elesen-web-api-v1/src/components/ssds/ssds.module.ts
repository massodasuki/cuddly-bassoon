import { Module } from '@nestjs/common';
import { SsdService } from './ssds.service';
import { SsdEntityController } from './ssds.controller';
import { SsdEntity } from './ssds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SsdEntity])],
  providers: [SsdService],
  controllers: [SsdEntityController],
  exports: [SsdService],
})
export class SsdModule {}
