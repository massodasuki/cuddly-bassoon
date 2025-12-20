import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationsV2Entityervice } from './applications-v2.service';
import { ApplicationsV2EntityController } from './applications-v2.controller';
import { ApplicationV2 } from './application-v2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationV2])],
  controllers: [ApplicationsV2EntityController],
  providers: [ApplicationsV2Entityervice],
  exports: [ApplicationsV2Entityervice],
})
export class ApplicationsV2Module {}
