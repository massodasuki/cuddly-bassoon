import { Module } from '@nestjs/common';
import { TzPemohonProfilesService } from './tz-pemohon-profiles.service';
import { TzPemohonProfilesController } from './tz-pemohon-profiles.controller';
import { TzPemohonProfilesEntity } from './tz-pemohon-profiles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPemohonProfilesEntity])],
  providers: [TzPemohonProfilesService],
  controllers: [TzPemohonProfilesController],
  exports: [TzPemohonProfilesService],
})
export class TzPemohonProfilesModule {}