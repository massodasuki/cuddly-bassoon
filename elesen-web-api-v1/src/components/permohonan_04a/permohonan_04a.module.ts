import { Module } from '@nestjs/common';
import { Permohonan04aService } from './permohonan_04a.service';
import { Permohonan04aController } from './permohonan_04a.controller';
import { Permohonan04aEntity } from './permohonan_04a.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Permohonan04aEntity])],
  providers: [Permohonan04aService],
  controllers: [Permohonan04aController],
  exports: [Permohonan04aService],
})
export class Permohonan04aModule {}