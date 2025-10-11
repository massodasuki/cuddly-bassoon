import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationsV2Service } from './applications-v2.service';
import { ApplicationsV2Controller } from './applications-v2.controller';
import { ApplicationV2 } from './application-v2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationV2])],
  controllers: [ApplicationsV2Controller],
  providers: [ApplicationsV2Service],
  exports: [ApplicationsV2Service],
})
export class ApplicationsV2Module {}