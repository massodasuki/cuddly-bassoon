import { Controller, Get, Param } from '@nestjs/common';
import { ForeignCrewService } from './foreign-crews.service';
import { ForeignCrewEntity } from './foreign-crews.entity';

@Controller('foreign-crews')
export class ForeignCrewEntityController {
  constructor(private readonly foreignCrewsService: ForeignCrewService) {}

  @Get()
  findAll(): Promise<ForeignCrewEntity[]> {
    return this.foreignCrewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ForeignCrewEntity> {
    return this.foreignCrewsService.findOne(id);
  }
}
