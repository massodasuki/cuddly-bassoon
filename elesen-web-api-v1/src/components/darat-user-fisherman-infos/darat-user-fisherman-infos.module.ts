import { Module } from '@nestjs/common';
import { DaratUserFishermanInfoService } from './darat-user-fisherman-infos.service';
import { DaratUserFishermanInfoEntityController } from './darat-user-fisherman-infos.controller';
import { DaratUserFishermanInfoEntity } from './darat-user-fisherman-infos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratUserFishermanInfoEntity])],
  providers: [DaratUserFishermanInfoService],
  controllers: [DaratUserFishermanInfoEntityController],
  exports: [DaratUserFishermanInfoService],
})
export class DaratUserFishermanInfoModule {}

