import { Module } from '@nestjs/common';
import { DaratApplicationLogService } from './darat-application-logs.service';
import { DaratApplicationLogEntityController } from './darat-application-logs.controller';
import { DaratApplicationLogEntity } from './darat-application-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratApplicationLogEntity])],
  providers: [DaratApplicationLogService],
  controllers: [DaratApplicationLogEntityController],
  exports: [DaratApplicationLogService],
})
export class DaratApplicationLogModule {}

