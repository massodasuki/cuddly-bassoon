import { Module } from '@nestjs/common';
import { SyaratSsdService } from './syarat_ssd.service';
import { SyaratSsdController } from './syarat_ssd.controller';
import { SyaratSsdEntity } from './syarat_ssd.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SyaratSsdEntity])],
  providers: [SyaratSsdService],
  controllers: [SyaratSsdController],
  exports: [SyaratSsdService],
})
export class SyaratSsdModule {}