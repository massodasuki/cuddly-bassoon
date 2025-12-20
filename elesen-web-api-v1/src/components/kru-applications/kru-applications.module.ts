import { Module } from '@nestjs/common';
import { KruApplicationService } from './kru-applications.service';
import { KruApplicationEntityController } from './kru-applications.controller';
import { KruApplicationEntity } from './kru-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruApplicationEntity])],
  providers: [KruApplicationService],
  controllers: [KruApplicationEntityController],
  exports: [KruApplicationService],
})
export class KruApplicationModule {}

