import { Module } from '@nestjs/common';
import { BorangPermohonanController } from './borang-permohonan.controller';
import { BorangPermohonanService } from './borang-permohonan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorangPermohonan } from './entities/borang-permohonan.entity';

@Module({
  controllers: [BorangPermohonanController],
  providers: [BorangPermohonanService],
  imports: [
    TypeOrmModule.forFeature([
      BorangPermohonan,
    ]),
  ],
})
export class BorangPermohonanModule {}