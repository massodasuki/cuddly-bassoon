import { Module } from '@nestjs/common';
import { KruEntityervice } from './kru.service';
import { KruEntityController } from './kru.controller';
import { KruEntity } from './kru.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruEntity])],
  providers: [KruEntityervice],
  controllers: [KruEntityController],
  exports: [KruEntityervice],
})
export class KruModule {}

