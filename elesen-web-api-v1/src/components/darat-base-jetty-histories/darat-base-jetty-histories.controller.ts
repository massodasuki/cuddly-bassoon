import { Controller, Get, Param } from '@nestjs/common';
import { DaratBaseJettyHistorieService } from './darat-base-jetty-histories.service';
import { DaratBaseJettyHistorieEntity } from './darat-base-jetty-histories.entity';

@Controller('darat-base-jetty-histories')
export class DaratBaseJettyHistorieEntityController {
  constructor(private readonly daratBaseJettyHistoriesService: DaratBaseJettyHistorieService) {}

  @Get()
  findAll(): Promise<DaratBaseJettyHistorieEntity[]> {
    return this.daratBaseJettyHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratBaseJettyHistorieEntity> {
    return this.daratBaseJettyHistoriesService.findOne(id);
  }
}

