import { Controller, Get, Param } from '@nestjs/common';
import { UserHistorieService } from './user-histories.service';
import { UserHistorieEntity } from './user-histories.entity';

@Controller('user-histories')
export class UserHistorieEntityController {
  constructor(private readonly userHistoriesService: UserHistorieService) {}

  @Get()
  findAll(): Promise<UserHistorieEntity[]> {
    return this.userHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserHistorieEntity> {
    return this.userHistoriesService.findOne(id);
  }
}
