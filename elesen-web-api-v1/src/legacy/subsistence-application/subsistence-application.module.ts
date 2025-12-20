import { Module } from '@nestjs/common';
import { SubsistenceApplicationEntityervice } from './subsistence-application.service';
import { SubsistenceApplicationEntityController } from './subsistence-application.controller';
import { SubsistenceApplicationEntity } from './subsistence-application.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistenceApplicationEntity])],
  providers: [SubsistenceApplicationEntityervice],
  controllers: [SubsistenceApplicationEntityController],
  exports: [SubsistenceApplicationEntityervice],
})
export class SubsistenceApplicationModule {}

