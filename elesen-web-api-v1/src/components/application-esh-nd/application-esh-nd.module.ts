import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEshNdService } from './application-esh-nd.service';
import { ApplicationEshNdController } from './application-esh-nd.controller';
import { ApplicationEshNd } from './application-esh-nd.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEshNd])],
  controllers: [ApplicationEshNdController],
  providers: [ApplicationEshNdService],
  exports: [ApplicationEshNdService],
})
export class ApplicationEshNdModule {}