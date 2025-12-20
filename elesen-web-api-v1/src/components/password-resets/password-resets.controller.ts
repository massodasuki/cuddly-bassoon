import { Controller, Get, Param } from '@nestjs/common';
import { PasswordResetService } from './password-resets.service';
import { PasswordResetEntity } from './password-resets.entity';

@Controller('password-resets')
export class PasswordResetEntityController {
  constructor(private readonly passwordResetsService: PasswordResetService) {}

  @Get()
  findAll(): Promise<PasswordResetEntity[]> {
    return this.passwordResetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PasswordResetEntity> {
    return this.passwordResetsService.findOne(id);
  }
}

