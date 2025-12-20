import { Module } from '@nestjs/common';
import { MuatanEntityervice } from './muatan.service';
import { MuatanEntityController } from './muatan.controller';
import { MuatanEntity } from './muatan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MuatanEntity])],
  providers: [MuatanEntityervice],
  controllers: [MuatanEntityController],
  exports: [MuatanEntityervice],
})
export class MuatanModule {}

