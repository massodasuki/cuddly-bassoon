import { Controller, Get, Param } from '@nestjs/common';
import { ParliamentSeatService } from './parliament-seats.service';
import { ParliamentSeatEntity } from './parliament-seats.entity';

@Controller('parliament-seats')
export class ParliamentSeatEntityController {
  constructor(private readonly parliamentSeatsService: ParliamentSeatService) {}

  @Get()
  findAll(): Promise<ParliamentSeatEntity[]> {
    return this.parliamentSeatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ParliamentSeatEntity> {
    return this.parliamentSeatsService.findOne(id);
  }
}

