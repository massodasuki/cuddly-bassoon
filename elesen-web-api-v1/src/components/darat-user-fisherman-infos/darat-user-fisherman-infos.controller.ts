import { Controller, Get, Param } from '@nestjs/common';
import { DaratUserFishermanInfoService } from './darat-user-fisherman-infos.service';
import { DaratUserFishermanInfoEntity } from './darat-user-fisherman-infos.entity';

@Controller('darat-user-fisherman-infos')
export class DaratUserFishermanInfoEntityController {
  constructor(private readonly daratUserFishermanInfosService: DaratUserFishermanInfoService) {}

  @Get()
  findAll(): Promise<DaratUserFishermanInfoEntity[]> {
    return this.daratUserFishermanInfosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratUserFishermanInfoEntity> {
    return this.daratUserFishermanInfosService.findOne(id);
  }
}

