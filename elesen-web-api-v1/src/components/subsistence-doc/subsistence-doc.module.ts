import { Module } from '@nestjs/common';
import { SubsistenceDocEntityervice } from './subsistence-doc.service';
import { SubsistenceDocEntityController } from './subsistence-doc.controller';
import { SubsistenceDocEntity } from './subsistence-doc.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistenceDocEntity])],
  providers: [SubsistenceDocEntityervice],
  controllers: [SubsistenceDocEntityController],
  exports: [SubsistenceDocEntityervice],
})
export class SubsistenceDocModule {}

