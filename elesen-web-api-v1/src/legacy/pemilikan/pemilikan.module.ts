import { Module } from '@nestjs/common';
import { PemilikanEntityervice } from './pemilikan.service';
import { PemilikanEntityController } from './pemilikan.controller';
import { PemilikanEntity } from './pemilikan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PemilikanEntity])],
  providers: [PemilikanEntityervice],
  controllers: [PemilikanEntityController],
  exports: [PemilikanEntityervice],
})
export class PemilikanModule {}

