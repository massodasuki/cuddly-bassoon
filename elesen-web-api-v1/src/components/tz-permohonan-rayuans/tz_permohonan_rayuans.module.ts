import { Module } from '@nestjs/common';
import { TzPermohonanRayuansService } from './tz_permohonan_rayuans.service';
import { TzPermohonanRayuansController } from './tz_permohonan_rayuans.controller';
import { TzPermohonanRayuansEntity } from './tz_permohonan_rayuans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanRayuansEntity])],
  providers: [TzPermohonanRayuansService],
  controllers: [TzPermohonanRayuansController],
  exports: [TzPermohonanRayuansService],
})
export class TzPermohonanRayuansModule {}