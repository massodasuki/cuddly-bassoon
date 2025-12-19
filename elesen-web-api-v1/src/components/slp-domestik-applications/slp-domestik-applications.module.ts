import { Module } from '@nestjs/common';
import { SlpDomestikApplicationsService } from './slp-domestik-applications.service';
import { SlpDomestikApplicationsController } from './slp-domestik-applications.controller';
import { SlpDomestikApplicationsEntity } from './slp-domestik-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpDomestikApplicationsEntity])],
  providers: [SlpDomestikApplicationsService],
  controllers: [SlpDomestikApplicationsController],
  exports: [SlpDomestikApplicationsService],
})
export class SlpDomestikApplicationsModule {}