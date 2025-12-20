import { Controller, Get, Param } from '@nestjs/common';
import { NelayanMarinService } from './nelayan-marins.service';
import { NelayanMarinEntity } from './nelayan-marins.entity';

@Controller('nelayan-marins')
export class NelayanMarinEntityController {
  constructor(private readonly nelayanMarinsService: NelayanMarinService) {}

  @Get()
  findAll(): Promise<NelayanMarinEntity[]> {
    return this.nelayanMarinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<NelayanMarinEntity> {
    return this.nelayanMarinsService.findOne(id);
  }
}

