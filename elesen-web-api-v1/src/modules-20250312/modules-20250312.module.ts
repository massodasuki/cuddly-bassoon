import { Module } from '@nestjs/common';
import { Modules_20250312Entityervice } from './modules-20250312.service';
import { Modules_20250312EntityController } from './modules-20250312.controller';
import { Modules_20250312Entity } from './modules-20250312.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Modules_20250312Entity])],
  providers: [Modules_20250312Entityervice],
  controllers: [Modules_20250312EntityController],
  exports: [Modules_20250312Entityervice],
})
export class Modules_20250312Module {}
