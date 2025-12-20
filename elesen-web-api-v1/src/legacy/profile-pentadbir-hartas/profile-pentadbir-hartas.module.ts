import { Module } from '@nestjs/common';
import { ProfilePentadbirHartaService } from './profile-pentadbir-hartas.service';
import { ProfilePentadbirHartaEntityController } from './profile-pentadbir-hartas.controller';
import { ProfilePentadbirHartaEntity } from './profile-pentadbir-hartas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePentadbirHartaEntity])],
  providers: [ProfilePentadbirHartaService],
  controllers: [ProfilePentadbirHartaEntityController],
  exports: [ProfilePentadbirHartaService],
})
export class ProfilePentadbirHartaModule {}

