import { Controller, Get, Param } from '@nestjs/common';
import { DaratUserDetailService } from './darat-user-details.service';
import { DaratUserDetailEntity } from './darat-user-details.entity';

@Controller('darat-user-details')
export class DaratUserDetailEntityController {
  constructor(private readonly daratUserDetailsService: DaratUserDetailService) {}

  @Get()
  findAll(): Promise<DaratUserDetailEntity[]> {
    return this.daratUserDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratUserDetailEntity> {
    return this.daratUserDetailsService.findOne(id);
  }
}

