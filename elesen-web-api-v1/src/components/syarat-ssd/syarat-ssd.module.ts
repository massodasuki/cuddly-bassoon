import { Module } from '@nestjs/common';
import { SyaratSsdService } from './syarat-ssd.service';
import { SyaratSsdController } from './syarat-ssd.controller';
import { SyaratSsdEntity } from './syarat-ssd.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SyaratSsdEntity])],
  providers: [SyaratSsdService],
  controllers: [SyaratSsdController],
  exports: [SyaratSsdService],
})
export class SyaratSsdModule {}