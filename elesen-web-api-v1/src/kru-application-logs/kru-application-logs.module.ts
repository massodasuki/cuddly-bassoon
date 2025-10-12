import { Module } from '@nestjs/common';
import { KruApplicationLogService } from './kru-application-logs.service';
import { KruApplicationLogEntityController } from './kru-application-logs.controller';
import { KruApplicationLogEntity } from './kru-application-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruApplicationLogEntity])],
  providers: [KruApplicationLogService],
  controllers: [KruApplicationLogEntityController],
  exports: [KruApplicationLogService],
})
export class KruApplicationLogModule {}
