import { Module } from '@nestjs/common';
import { KesalahanEntityervice } from './kesalahan.service';
import { KesalahanEntityController } from './kesalahan.controller';
import { KesalahanEntity } from './kesalahan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KesalahanEntity])],
  providers: [KesalahanEntityervice],
  controllers: [KesalahanEntityController],
  exports: [KesalahanEntityervice],
})
export class KesalahanModule {}
