import { Module } from '@nestjs/common';
import { DaratApplicationTempService } from './darat-application-temps.service';
import { DaratApplicationTempEntityController } from './darat-application-temps.controller';
import { DaratApplicationTempEntity } from './darat-application-temps.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratApplicationTempEntity])],
  providers: [DaratApplicationTempService],
  controllers: [DaratApplicationTempEntityController],
  exports: [DaratApplicationTempService],
})
export class DaratApplicationTempModule {}
