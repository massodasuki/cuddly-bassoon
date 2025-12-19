import { Module } from '@nestjs/common';
import { Ppv04bCheck212Service } from './ppv04b_check_212.service';
import { Ppv04bCheck212Controller } from './ppv04b_check_212.controller';
import { Ppv04bCheck212Entity } from './ppv04b_check_212.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bCheck212Entity])],
  providers: [Ppv04bCheck212Service],
  controllers: [Ppv04bCheck212Controller],
  exports: [Ppv04bCheck212Service],
})
export class Ppv04bCheck212Module {}