import { Module } from '@nestjs/common';
import { LesenEntityervice } from './lesen.service';
import { LesenEntityController } from './lesen.controller';
import { LesenEntity } from './lesen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LesenEntity])],
  providers: [LesenEntityervice],
  controllers: [LesenEntityController],
  exports: [LesenEntityervice],
})
export class LesenModule {}
