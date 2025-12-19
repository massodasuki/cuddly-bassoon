import { Module } from '@nestjs/common';


@Module({
  imports: [TypeOrmModule.forFeature([
    ProfileUserEntity,
    VesselEntity,
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