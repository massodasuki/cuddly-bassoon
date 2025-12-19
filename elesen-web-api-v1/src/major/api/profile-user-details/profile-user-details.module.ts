import { Module } from '@nestjs/common';
import { ProfileUserDetailsService } from './profile-user-details.service';
import { ProfileUserDetailsController } from './profile-user-details.controller';
import { ProfileUserEntity, VesselEntity, ProfileUserVesselEntity, ProfilePengusahaSklEntity, ApplicationV2ProfileUser, JettieEntity, RiverEntity, KesalahanEntity, ParliamentEntity, ParliamentSeatEntity, FishingLogNdEntity, CatchingLocationNdEntity, KulitEntity, EnjinEntity, CodeMaster } from '../common/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([
    ProfileUserEntity,
    VesselEntity,
    ProfileUserVesselEntity,
    ProfilePengusahaSklEntity,
    ApplicationV2ProfileUser,
    JettieEntity,
    RiverEntity,
    KesalahanEntity,
    ParliamentEntity,
    ParliamentSeatEntity,
    FishingLogNdEntity,
    CatchingLocationNdEntity,
    KulitEntity,
    EnjinEntity,
    CodeMaster
  ])],
  providers: [ProfileUserDetailsService],
  controllers: [ProfileUserDetailsController],
  exports: [ProfileUserDetailsService],
})
export class ProfileUserDetailsModule {}