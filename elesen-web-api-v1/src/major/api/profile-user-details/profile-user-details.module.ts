import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfileUserEntity } from '../common/entities/profile-users.entity';
import { Vessel } from '../common/entities/vessel.entity';
import { ProfileUserVesselEntity } from '../common/entities/profile-user-vessel.entity';
import { ProfilePengusahaSklEntity } from '../common/entities/profile-pengusaha-skl.entity';
import { ApplicationV2ProfileUser } from '../common/entities/application-v2-profile-user.entity';
import { RiverEntity } from '../common/entities/river.entity';
import { CodeMaster } from '../common/entities/code-masters.entity';

import { ProfileUserDetailsService } from './profile-user-details.service';
import { ProfileUserDetailsController } from './profile-user-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    ProfileUserEntity,
    Vessel,
    ProfileUserVesselEntity,
    ProfilePengusahaSklEntity,
    ApplicationV2ProfileUser,
    RiverEntity,
    CodeMaster
  ])],
  providers: [ProfileUserDetailsService],
  controllers: [ProfileUserDetailsController],
  exports: [ProfileUserDetailsService],
})
export class ProfileUserDetailsModule {}