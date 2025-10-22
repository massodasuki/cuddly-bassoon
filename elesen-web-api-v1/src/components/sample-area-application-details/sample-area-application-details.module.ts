import { Module } from '@nestjs/common';
import { SampleAreaApplicationDetailService } from './sample-area-application-details.service';
import { SampleAreaApplicationDetailEntityController } from './sample-area-application-details.controller';
import { SampleAreaApplicationDetailEntity } from './sample-area-application-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaApplicationDetailEntity])],
  providers: [SampleAreaApplicationDetailService],
  controllers: [SampleAreaApplicationDetailEntityController],
  exports: [SampleAreaApplicationDetailService],
})
export class SampleAreaApplicationDetailModule {}
