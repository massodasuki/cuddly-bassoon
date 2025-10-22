import { Module } from '@nestjs/common';
import { MaklumatSyarikatService } from './maklumat-syarikats.service';
import { MaklumatSyarikatEntityController } from './maklumat-syarikats.controller';
import { MaklumatSyarikatEntity } from './maklumat-syarikats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MaklumatSyarikatEntity])],
  providers: [MaklumatSyarikatService],
  controllers: [MaklumatSyarikatEntityController],
  exports: [MaklumatSyarikatService],
})
export class MaklumatSyarikatModule {}
