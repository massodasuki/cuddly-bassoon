import { Module } from '@nestjs/common';
import { SubsistenceListHqService } from './subsistence-list-hqs.service';
import { SubsistenceListHqEntityController } from './subsistence-list-hqs.controller';
import { SubsistenceListHqEntity } from './subsistence-list-hqs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistenceListHqEntity])],
  providers: [SubsistenceListHqService],
  controllers: [SubsistenceListHqEntityController],
  exports: [SubsistenceListHqService],
})
export class SubsistenceListHqModule {}

