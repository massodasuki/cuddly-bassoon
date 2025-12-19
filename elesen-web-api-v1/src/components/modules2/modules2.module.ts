import { Module } from '@nestjs/common';
import { Modules2Service } from './modules2.service';
import { Modules2Controller } from './modules2.controller';
import { Modules2Entity } from './modules2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Modules2Entity])],
  providers: [Modules2Service],
  controllers: [Modules2Controller],
  exports: [Modules2Service],
})
export class Modules2Module {}