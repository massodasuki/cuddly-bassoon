import { Module } from '@nestjs/common';
import { TzPermohonanRayuansService } from './tz-permohonan-rayuans.service';
import { TzPermohonanRayuansController } from './tz-permohonan-rayuans.controller';
import { TzPermohonanRayuansEntity } from './tz-permohonan-rayuans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanRayuansEntity])],
  providers: [TzPermohonanRayuansService],
  controllers: [TzPermohonanRayuansController],
  exports: [TzPermohonanRayuansService],
})
export class TzPermohonanRayuansModule {}