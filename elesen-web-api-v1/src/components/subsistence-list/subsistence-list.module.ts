import { Module } from '@nestjs/common';
import { SubsistenceListEntityervice } from './subsistence-list.service';
import { SubsistenceListEntityController } from './subsistence-list.controller';
import { SubsistenceListEntity } from './subsistence-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistenceListEntity])],
  providers: [SubsistenceListEntityervice],
  controllers: [SubsistenceListEntityController],
  exports: [SubsistenceListEntityervice],
})
export class SubsistenceListModule {}

