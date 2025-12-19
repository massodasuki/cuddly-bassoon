import { Module } from '@nestjs/common';
import { SlpDomestikApplicationsService } from './slp_domestik_applications.service';
import { SlpDomestikApplicationsController } from './slp_domestik_applications.controller';
import { SlpDomestikApplicationsEntity } from './slp_domestik_applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpDomestikApplicationsEntity])],
  providers: [SlpDomestikApplicationsService],
  controllers: [SlpDomestikApplicationsController],
  exports: [SlpDomestikApplicationsService],
})
export class SlpDomestikApplicationsModule {}