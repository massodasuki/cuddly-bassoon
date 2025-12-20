import { Module } from '@nestjs/common';
import { ConfiscationEntityervice } from './confiscation.service';
import { ConfiscationEntityController } from './confiscation.controller';
import { ConfiscationEntity } from './confiscation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ConfiscationEntity])],
  providers: [ConfiscationEntityervice],
  controllers: [ConfiscationEntityController],
  exports: [ConfiscationEntityervice],
})
export class ConfiscationModule {}

