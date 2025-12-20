import { Module } from '@nestjs/common';
import { PersonalAccessTokenService } from './personal-access-tokens.service';
import { PersonalAccessTokenEntityController } from './personal-access-tokens.controller';
import { PersonalAccessTokenEntity } from './personal-access-tokens.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalAccessTokenEntity])],
  providers: [PersonalAccessTokenService],
  controllers: [PersonalAccessTokenEntityController],
  exports: [PersonalAccessTokenService],
})
export class PersonalAccessTokenModule {}

