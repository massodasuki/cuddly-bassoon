import { Module } from '@nestjs/common';
import { TzPemohonProfilesService } from './tz_pemohon_profiles.service';
import { TzPemohonProfilesController } from './tz_pemohon_profiles.controller';
import { TzPemohonProfilesEntity } from './tz_pemohon_profiles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPemohonProfilesEntity])],
  providers: [TzPemohonProfilesService],
  controllers: [TzPemohonProfilesController],
  exports: [TzPemohonProfilesService],
})
export class TzPemohonProfilesModule {}