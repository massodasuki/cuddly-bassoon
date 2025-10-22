import { Module } from '@nestjs/common';
import { DaratHelpAgencyFishermanService } from './darat-help-agency-fishermans.service';
import { DaratHelpAgencyFishermanEntityController } from './darat-help-agency-fishermans.controller';
import { DaratHelpAgencyFishermanEntity } from './darat-help-agency-fishermans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratHelpAgencyFishermanEntity])],
  providers: [DaratHelpAgencyFishermanService],
  controllers: [DaratHelpAgencyFishermanEntityController],
  exports: [DaratHelpAgencyFishermanService],
})
export class DaratHelpAgencyFishermanModule {}
