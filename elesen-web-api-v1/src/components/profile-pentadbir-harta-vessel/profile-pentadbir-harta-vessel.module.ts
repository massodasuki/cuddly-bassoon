import { Module } from '@nestjs/common';
import { ProfilePentadbirHartaVesselService } from './profile-pentadbir-harta-vessel.service';
import { ProfilePentadbirHartaVesselEntityController } from './profile-pentadbir-harta-vessel.controller';
import { ProfilePentadbirHartaVesselEntity } from './profile-pentadbir-harta-vessel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePentadbirHartaVesselEntity])],
  providers: [ProfilePentadbirHartaVesselService],
  controllers: [ProfilePentadbirHartaVesselEntityController],
  exports: [ProfilePentadbirHartaVesselService],
})
export class ProfilePentadbirHartaVesselModule {}

