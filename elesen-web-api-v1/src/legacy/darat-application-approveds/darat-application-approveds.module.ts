import { Module } from '@nestjs/common';
import { DaratApplicationApprovedService } from './darat-application-approveds.service';
import { DaratApplicationApprovedEntityController } from './darat-application-approveds.controller';
import { DaratApplicationApprovedEntity } from './darat-application-approveds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratApplicationApprovedEntity])],
  providers: [DaratApplicationApprovedService],
  controllers: [DaratApplicationApprovedEntityController],
  exports: [DaratApplicationApprovedService],
})
export class DaratApplicationApprovedModule {}

