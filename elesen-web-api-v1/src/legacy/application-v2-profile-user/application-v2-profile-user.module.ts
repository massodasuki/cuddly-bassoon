import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationV2ProfileUserService } from './application-v2-profile-user.service';
import { ApplicationV2ProfileUserController } from './application-v2-profile-user.controller';
import { ApplicationV2ProfileUser } from './application-v2-profile-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationV2ProfileUser])],
  controllers: [ApplicationV2ProfileUserController],
  providers: [ApplicationV2ProfileUserService],
  exports: [ApplicationV2ProfileUserService],
})
export class ApplicationV2ProfileUserModule {}
