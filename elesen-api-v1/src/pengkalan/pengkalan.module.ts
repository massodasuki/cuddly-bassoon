import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PengkalanService } from './pengkalan.service';
import { PengkalanController } from './pengkalan.controller';
import { Pengkalan } from './entities/pengkalan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pengkalan])],
  controllers: [PengkalanController],
  providers: [PengkalanService],
})
export class PengkalanModule {}