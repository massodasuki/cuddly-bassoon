import { Module } from '@nestjs/common';
import { MesyuaratKickoff04aService } from './mesyuarat-kickoff-04a.service';
import { MesyuaratKickoff04aController } from './mesyuarat-kickoff-04a.controller';
import { MesyuaratKickoff04aEntity } from './mesyuarat-kickoff-04a.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MesyuaratKickoff04aEntity])],
  providers: [MesyuaratKickoff04aService],
  controllers: [MesyuaratKickoff04aController],
  exports: [MesyuaratKickoff04aService],
})
export class MesyuaratKickoff04aModule {}