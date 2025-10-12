import { Module } from '@nestjs/common';
import { ProfileUserVesselEntityervice } from './profile-user-vessel.service';
import { ProfileUserVesselEntityController } from './profile-user-vessel.controller';
import { ProfileUserVesselEntity } from './profile-user-vessel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileUserVesselEntity])],
  providers: [ProfileUserVesselEntityervice],
  controllers: [ProfileUserVesselEntityController],
  exports: [ProfileUserVesselEntityervice],
})
export class ProfileUserVesselModule {}
