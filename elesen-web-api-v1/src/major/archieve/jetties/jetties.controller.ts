import { Controller, Get, Param } from '@nestjs/common';
import { JettieService } from './jetties.service';
import { JettieEntity } from './jetties.entity';

@Controller('jetties')
export class JettieEntityController {
  constructor(private readonly jettiesService: JettieService) {}

  @Get()
  findAll(): Promise<JettieEntity[]> {
    return this.jettiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<JettieEntity> {
    return this.jettiesService.findOne(id);
  }
}
