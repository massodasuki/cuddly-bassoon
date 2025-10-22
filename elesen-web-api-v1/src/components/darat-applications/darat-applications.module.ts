import { Module } from '@nestjs/common';
import { DaratApplicationService } from './darat-applications.service';
import { DaratApplicationEntityController } from './darat-applications.controller';
import { DaratApplicationEntity } from './darat-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratApplicationEntity])],
  providers: [DaratApplicationService],
  controllers: [DaratApplicationEntityController],
  exports: [DaratApplicationService],
})
export class DaratApplicationModule {}
