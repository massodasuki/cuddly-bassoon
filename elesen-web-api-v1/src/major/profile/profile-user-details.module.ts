import { Module } from '@nestjs/common';
import { ProfileUserDetailsService } from './profile-user-details.service';
import { ProfileUserDetailsController } from './profile-user-details.controller';
import { ProfileUserEntity } from '../../profile-users/profile-users.entity';
import { VesselEntity } from '../../vessels/vessels.entity';
import { ProfileUserVesselEntity } from '../../profile-user-vessel/profile-user-vessel.entity';
import { ProfilePengusahaSklEntity } from '../../profile-pengusaha-skls/profile-pengusaha-skls.entity';
import { ApplicationV2ProfileUser } from '../../application-v2-profile-user/application-v2-profile-user.entity';
import { JettieEntity } from '../../jetties/jetties.entity';
import { RiverEntity } from '../../rivers/rivers.entity';
import { KesalahanEntity } from '../../kesalahan/kesalahan.entity';
import { ParliamentEntity } from '../../parliaments/parliaments.entity';
import { ParliamentSeatEntity } from '../../parliament-seats/parliament-seats.entity';
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
    ParliamentSeatEntity
  ])],
  providers: [ProfileUserDetailsService],
  controllers: [ProfileUserDetailsController],
  exports: [ProfileUserDetailsService],
})
export class ProfileUserDetailsModule {}