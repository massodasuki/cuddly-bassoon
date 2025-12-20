import { Module } from '@nestjs/common';
import { PematuhanEntityervice } from './pematuhan.service';
import { PematuhanEntityController } from './pematuhan.controller';
import { PematuhanEntity } from './pematuhan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PematuhanEntity])],
  providers: [PematuhanEntityervice],
  controllers: [PematuhanEntityController],
  exports: [PematuhanEntityervice],
})
export class PematuhanModule {}

