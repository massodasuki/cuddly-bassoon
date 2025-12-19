import { Module } from '@nestjs/common';
import { Ppv04bsService } from './ppv04bs.service';
import { Ppv04bsController } from './ppv04bs.controller';
import { Ppv04bsEntity } from './ppv04bs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bsEntity])],
  providers: [Ppv04bsService],
  controllers: [Ppv04bsController],
  exports: [Ppv04bsService],
})
export class Ppv04bsModule {}