import { Module } from '@nestjs/common';
import { DaratUserDetailService } from './darat-user-details.service';
import { DaratUserDetailEntityController } from './darat-user-details.controller';
import { DaratUserDetailEntity } from './darat-user-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratUserDetailEntity])],
  providers: [DaratUserDetailService],
  controllers: [DaratUserDetailEntityController],
  exports: [DaratUserDetailService],
})
export class DaratUserDetailModule {}
