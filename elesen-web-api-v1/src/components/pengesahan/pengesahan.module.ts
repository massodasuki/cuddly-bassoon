import { Module } from '@nestjs/common';
import { PengesahanEntityervice } from './pengesahan.service';
import { PengesahanEntityController } from './pengesahan.controller';
import { PengesahanEntity } from './pengesahan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PengesahanEntity])],
  providers: [PengesahanEntityervice],
  controllers: [PengesahanEntityController],
  exports: [PengesahanEntityervice],
})
export class PengesahanModule {}
