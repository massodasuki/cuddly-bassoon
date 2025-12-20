import { Module } from '@nestjs/common';
import { DaratBaseJettyHistorieService } from './darat-base-jetty-histories.service';
import { DaratBaseJettyHistorieEntityController } from './darat-base-jetty-histories.controller';
import { DaratBaseJettyHistorieEntity } from './darat-base-jetty-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratBaseJettyHistorieEntity])],
  providers: [DaratBaseJettyHistorieService],
  controllers: [DaratBaseJettyHistorieEntityController],
  exports: [DaratBaseJettyHistorieService],
})
export class DaratBaseJettyHistorieModule {}

