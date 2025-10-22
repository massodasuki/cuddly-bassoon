import { Module } from '@nestjs/common';
import { SampleAreaApplicationService } from './sample-area-applications.service';
import { SampleAreaApplicationEntityController } from './sample-area-applications.controller';
import { SampleAreaApplicationEntity } from './sample-area-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaApplicationEntity])],
  providers: [SampleAreaApplicationService],
  controllers: [SampleAreaApplicationEntityController],
  exports: [SampleAreaApplicationService],
})
export class SampleAreaApplicationModule {}
