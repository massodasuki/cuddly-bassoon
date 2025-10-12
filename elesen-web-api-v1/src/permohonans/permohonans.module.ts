import { Module } from '@nestjs/common';
import { PermohonanService } from './permohonans.service';
import { PermohonanEntityController } from './permohonans.controller';
import { PermohonanEntity } from './permohonans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PermohonanEntity])],
  providers: [PermohonanService],
  controllers: [PermohonanEntityController],
  exports: [PermohonanService],
})
export class PermohonanModule {}
