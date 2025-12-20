import { Module } from '@nestjs/common';
import { CulturedShellHistorieService } from './cultured-shell-histories.service';
import { CulturedShellHistorieEntityController } from './cultured-shell-histories.controller';
import { CulturedShellHistorieEntity } from './cultured-shell-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CulturedShellHistorieEntity])],
  providers: [CulturedShellHistorieService],
  controllers: [CulturedShellHistorieEntityController],
  exports: [CulturedShellHistorieService],
})
export class CulturedShellHistorieModule {}

