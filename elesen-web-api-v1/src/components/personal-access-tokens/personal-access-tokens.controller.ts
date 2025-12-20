import { Controller, Get, Param } from '@nestjs/common';
import { PersonalAccessTokenService } from './personal-access-tokens.service';
import { PersonalAccessTokenEntity } from './personal-access-tokens.entity';

@Controller('personal-access-tokens')
export class PersonalAccessTokenEntityController {
  constructor(private readonly personalAccessTokensService: PersonalAccessTokenService) {}

  @Get()
  findAll(): Promise<PersonalAccessTokenEntity[]> {
    return this.personalAccessTokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PersonalAccessTokenEntity> {
    return this.personalAccessTokensService.findOne(id);
  }
}

