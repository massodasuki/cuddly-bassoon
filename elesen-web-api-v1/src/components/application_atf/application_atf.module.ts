import { Module } from '@nestjs/common';
import { ApplicationAtfService } from './application_atf.service';
import { ApplicationAtfController } from './application_atf.controller';
import { ApplicationAtfEntity } from './application_atf.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationAtfEntity])],
  providers: [ApplicationAtfService],
  controllers: [ApplicationAtfController],
  exports: [ApplicationAtfService],
})
export class ApplicationAtfModule {}